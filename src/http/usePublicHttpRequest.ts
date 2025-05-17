import axios from 'axios';

export const useHttpPublicRequest = (baseUrl: string) => axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000
})