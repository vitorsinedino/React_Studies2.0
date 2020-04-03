
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID tc2SMEfYiaGBklh7kqMD8Nk44zxdlNev4UZQnqzwliM'
    }
});