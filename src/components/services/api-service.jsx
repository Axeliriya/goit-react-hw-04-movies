import axios from 'axios';

const apiService = {
  apiKey: 'e1648943ec3f00b3b8db827b73df4be9',
  url: `https://api.themoviedb.org/3`,

  getFetchTrendingMovies() {
    return axios
      .get(`${this.url}/trending/movie/day?api_key=${this.apiKey}&page=1`)
      .then(({ data }) => data);
  },

  getFetchDetailesMovie(id) {
    return axios
      .get(`${this.url}/movie/${id}?api_key=${this.apiKey}`)
      .then(({ data }) => data);
  },

  getFetchCastMovie(id) {
    return axios
      .get(`${this.url}/movie/${id}/credits?api_key=${this.apiKey}`)
      .then(({ data }) => data);
  },

  getFetchReviewsMovie(id) {
    return axios
      .get(`${this.url}/movie/${id}/reviews?api_key=${this.apiKey}`)
      .then(({ data }) => data);
  },

  getFetchSearchMovie(query) {
    return axios
      .get(
        `${this.url}/search/movie/?query=${query}&api_key=${this.apiKey}&page=1`,
      )
      .then(({ data }) => data);
  },
};

export default apiService;
