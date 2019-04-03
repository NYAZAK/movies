import * as axios from 'axios';

const apiMovie = axios.create(
    {
        baseURL: 'https://api.themoviedb.org/4',
        
    }
)

apiMovie.interceptors.request.use(
    req => {
        req.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWU0Yzk5NGYxMGU2NjJhMjJhOTM1Y2FhOGY4YmExNyIsInN1YiI6IjVjYTQ5N2IxOTI1MTQxMmRmYTFkZmY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gT83d2RUfxQpkUJQR6rDG0SddT3U1FJ_JJXQIwOpwsU'
    return req;
    }
)

export default apiMovie;