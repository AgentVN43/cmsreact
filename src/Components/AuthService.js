// AuthService.js
import axios from 'axios';

const API_URL = 'https://e-visaforvietnam.com/wp-json/api/v1';

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/token`, {
        username,
        password,
      });
      if (response.data.jwt_token) {
        localStorage.setItem('user', JSON.stringify(response.data.jwt_token));
      }
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
};

export default AuthService;
