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

   export const fetchUserTeam = async() => {
        const response = await axios.get(`${API_BASE_URL}/api/fantasy/user/team`, {
            headers: {
                'Authorization': `Bearer `+localStorage.getItem("accessToken")
            }
        });

        return response.data;
    };

export const createTeam = async(name) => {
    const response = await axios.post(`${API_BASE_URL}/api/fantasy/team`, {name},
    {
        headers: {
            'Authorization': `Bearer `+localStorage.getItem("accessToken")
        }
    });

    return response.data;
};
export const searchEngine = async(name,position,price, page) => {
    const response = await apiClient.get('/api/player/all?name=' + name + '&position=' + position + '&price=' + price + '&page=' + page + '&size=5', {
        headers: {
            'Authorization': `Bearer ` + localStorage.getItem("accessToken")
        }
    });

// If the data is wrapped within an additional object, adjust the return statement
    return response.data;

};
export const getBudget = async() => {
    const response = await apiClient.get('/api/fantasy/team/budget', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        }
    });
    return response.data;
};

export const getFixture = async() => {
    const response = await apiClient.get('/api/fantasy/gameweek', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        }
    });
    return response.data;
};


