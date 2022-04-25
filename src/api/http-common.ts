import axios from 'axios';

export default axios.create({
    baseURL: 'http://gutendex.com',
    headers: {
        'Content-Type': 'application/json',
    },
});
