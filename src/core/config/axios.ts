import axios from 'axios';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request` for the full list of configs

const axiosClient = axios.create({
    baseURL: 'http://112.137.129.158:5002/',
});
axiosClient.interceptors.request.use(async (config) => {
    const user = localStorage.getItem('accessUser');

    if (user) {
        const accessUser = JSON.parse(user)
        config.headers.Authorization = `Bearer ${accessUser}`;
    }
    config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json';

    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && (response.data || response.data === 0)) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    return error.response;
});
export default axiosClient;