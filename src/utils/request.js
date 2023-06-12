import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path , option = {}) => {
    const respon = await request.get(path , option);
    return respon.data;
};

export default request;
