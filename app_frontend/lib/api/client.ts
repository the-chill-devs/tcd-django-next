import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

// Interceptors for handling authentication
apiClient.interceptors.response.use((response) => {
    return response;
});

export default apiClient;