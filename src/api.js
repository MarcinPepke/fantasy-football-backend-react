// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const apiClient = axios.create({
    baseURL: API_BASE_URL
});


export const login = async (username, password) => {
    try {
        const response = await apiClient.post('/api/auth', {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const register = async (username, password) => {
    try {
        const response = await apiClient.post('/api/user', {
            username: username,
            password: password,
        });
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};
export const fetchUserTeam = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/fantasy/user/team`, {
        headers: {
            'Authorization': `Bearer ` + localStorage.getItem("accessToken")
        }
    });

    return response.data;
};

    export const createTeam = async (name) => {
        const response = await axios.post(`${API_BASE_URL}/api/fantasy/team`, {name},
            {
                headers: {
                    'Authorization': `Bearer ` + localStorage.getItem("accessToken")
                }
            });
        return response.data;
    };
export const searchEngine = async (name, position, price, page) => {
    const response = await apiClient.get('/api/player/all?name=' + name + '&position=' + position + '&price=' + price + '&page=' + page + '&size=5', {
        headers: {
            'Authorization': `Bearer ` + localStorage.getItem("accessToken")
        }
    });

// If the data is wrapped within an additional object, adjust the return statement
    return response.data;

};
export const getBudget = async () => {
    const response = await apiClient.get('/api/fantasy/team/budget', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        }
    });
    return response.data;
};

export const getFixture = async (gameweek) => {
    const response = await apiClient.get('/api/fantasy/gameweek/'+gameweek, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        }
    });
    return response.data;
};
export const updateTeam = async (lineup, budget) => {
    const response = await apiClient.put('/api/fantasy/team/save', {lineup, budget}, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        }
    });
    return response.data;
};
export const fetchPlayerStatisticsAndCalculatePointsApi = async (fixtureId) => {
    const response = await apiClient.get('/api/player/stats', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        },
        params: {
            'fixtureId': fixtureId
        }
    });
    return response.data;
};
export const fetchingOverallRankingData = async () => {
    const response = await apiClient.get('/api/fantasy/ranking-total', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        }
    });
    return response.data;
};
export const fetchingCurrentGameweekRankingData = async () => {
    const response = await apiClient.get('/api/fantasy/ranking-current', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        }
    });
    return response.data;
};
export const isTeam = async () => {
    const response = await apiClient.get('/api/fantasy/isTeam', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        }
    });
    return response.data;
};
export const getCurentGameweek = async () => {
    const response = await apiClient.get('/api/fantasy/gameweek/currentRound', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        }
    });
    return response.data;
};




