import axios from 'axios';

const KEY = process.env.REACT_APP_YOUTUBE;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 20,
    playlistId: 'UU4VeQJeQNWt_F7DuXRq6hLQ',
    key: KEY,
  },
});
