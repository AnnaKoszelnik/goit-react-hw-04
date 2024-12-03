import axios from 'axios';

const API_KEY = 'dFsS3dWW0mbhPoItH2nmZyUPP6mIrdLPOi_RqB7XEU4';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;

axios.defaults.params = {
  orientation: 'landscape',
  per_page: 24,
};

export const fetchPhotos = async (param, page) => {
  const { data } = await axios.get(`search/photos?query=${param}&page=${page}`);

  return data;
};