import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/', // Your Django API URL
    timeout: 10000,
});

export const getYourData = async () => {
    try {
        const response = await api.get('your-endpoint/');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
