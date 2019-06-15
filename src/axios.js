import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-build-my-burder.firebaseio.com/'
});

export default instance;