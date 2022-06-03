import axios from "axios";

const BASE_URLL = "https://jsonplaceholder.typicode.com/";

const getFoto = (id) => {
  return axios.get(`${BASE_URLL}photos?albumId=${id}`);
};

const getAlbum = () => {
  return axios.get(`${BASE_URLL}albums`);
};

const getComment = () => {
  return axios.get(`${BASE_URLL}comments`);
};

export { getFoto, getAlbum, getComment };
