import * as axios from 'axios';

const apiMovie = axios.create(
    {
        baseURL: 'https://api.themoviedb.org/4',
        
    }
)

apiMovie.interceptors.request.use(
    req => {
        req.headers['Authorization'] = 'Bearer ....'
    return req;
    }
)

export default apiMovie;