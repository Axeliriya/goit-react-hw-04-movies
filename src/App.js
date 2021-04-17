import './styles.css';
import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import { routes } from './routes';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName: "home-page" */),
);

const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense
          fallback={
            <div className="PosSpinnerLoad">
              <Loader
                type="ThreeDots"
                color="#999999"
                height={50}
                width={150}
              />
            </div>
          }
        >
          <Switch>
            {routes.map(({ path, exact, component: Component }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                component={Component}
              />
            ))}
            <Route component={HomePage}></Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;