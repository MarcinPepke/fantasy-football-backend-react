import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your API URL

export const getAllPremierLeaguePlayers = async () => {
    const response = await axios.get('http://localhost:8080/api/player/all' ,{
        headers: {
            'Authorization': `Bearer `+localStorage.getItem("accessToken")
        }});
    return response.data;
};
export const addPlayerToTeam = async (playerId, teamId) => {
    const response = await axios.post('${API_URL}/teams/${teamId}/players', { playerId });
    return response.data;
};

export const removePlayerFromTeam = async (playerId, teamId) => {
    const response = await axios.delete('${API_URL}/teams/${teamId}/players/${playerId}');
    return response.data;
};

export const updateTeam = async (teamId, newTeam) => {
    const response = await axios.put('${API_URL}/teams/${teamId}', newTeam);
    return response.data;
};

// export const getLeagueStandings = async () => {
//     const response = await axios.get(`${API_URL}/leagues/standings`);
//     return response.data;
// };