import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-3febc.firebaseio.com/'
})

export default instance;