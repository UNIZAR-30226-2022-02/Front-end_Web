import axios from 'axios';

export default axios.create({
    baseURL: `https://serverrisk.herokuapp.com:3000/`
});