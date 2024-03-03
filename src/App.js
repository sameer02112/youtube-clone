import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';
import { RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store = {store}>
        <Header/>
        <RouterProvider router = {appRouter}>
          <Body/>
        </RouterProvider>
    </Provider>
    
  );
}

export default App;
