import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

const register = (username, email, password, role) => {
    return axios.post(API_URL + 'register', {
        username,
        email,
        password,
        role // Pass the role to the registration API
    });
};

const login = (email, password) => {
    return axios.post(API_URL + 'login', {
        email,
        password
    }).then((response) => {
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

export default {
    register,
    login,
    logout
};
