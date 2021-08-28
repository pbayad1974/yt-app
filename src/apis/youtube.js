import axios from 'axios';

const KEY = 'AIzaSyC27Gj1RO-SbafmUV0mlRPS09pVjUXQ9xU'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});
