import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID c66f23aefceb907bc24b86799df0b38c5a4a9223589a1f18f28fc99ce62ba36b'
    }
});