import { lazy } from 'react';

const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /*webpackChunkName: "movie-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /*webpackChunkName: "movies-page" */),
);

const Cast = lazy(() =>
  import('./components/Cast' /*webpackChunkName: "details-cast" */),
);
const Reviews = lazy(() =>
  import('./components/Reviews' /*webpackChunkName: "details-reviews" */),
);
const MoviesList = lazy(() =>
  import('./components/MoviesList' /*webpackChunkName: "movie-details-page" */),
);

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
    exact: true,
  },
  {
    path: '/movies/:movieId',
    label: 'Movie Details',
    component: MovieDetailsPage,
    exact: false,
  },
  {
    path: '/movies',
    label: 'Movies',
    component: MoviesPage,
    exact: true,
  },
];

export const routesDetails = [
  {
    path: '/cast',
    label: 'Cast',
    component: Cast,
    exact: false,
  },
  {
    path: '/reviews',
    label: 'Reviews',
    component: Reviews,
    exact: false,
  },
];

export const routesQuery = [
  {
    path: '/:query',
    label: 'MoviesQuery',
    component: MoviesList,
    exact: false,
  },
];
