import ProductFeature from 'features/Product';
import { useSnackbar } from 'notistack';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import CounterFeature from './features/Counter';
import AlbumFeature from './features/Song';
import TodoFeature from './features/Todo';

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const showNoti = () => {
    enqueueSnackbar('Register successfully', { variant: 'success' });
  };
  return (
    <div className="App">
      <Header />
      {/* <h1>Home page</h1>

      <Button onClick={showNoti}>Show noti</Button> */}

      <Switch>
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
