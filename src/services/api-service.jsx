import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzI0ZDZjYTBlMDJiZWRlOTQ3NjYzMzJjNmY1NjUyYyIsInN1YiI6IjYwM2ViNGI0MGU2NGFmMDA1YWRkMmYzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qa4vY9aDLVYgtYAPpblOW27gUgsGsx9oLVcMwWqyars';

const apiService = {
  url: `https://api.themoviedb.org/3`,

  getFetchTrendingMovies() {
    return axios
      .get(`${this.url}/trending/movie/day?&page=1`)
      .then(({ data }) => data);
  },

  getFetchDetailesMovie(id) {
    return axios.get(`${this.url}/movie/${id}`).then(({ data }) => data);
  },

  getFetchCastMovie(id) {
    return axios
      .get(`${this.url}/movie/${id}/credits`)
      .then(({ data }) => data);
  },

  getFetchReviewsMovie(id) {
    return axios
      .get(`${this.url}/movie/${id}/reviews`)
      .then(({ data }) => data);
  },

  getFetchSearchMovie(query) {
    return axios
      .get(`${this.url}/search/movie?query=${query}`)
      .then(({ data }) => data);
  },
};

export default apiService;
