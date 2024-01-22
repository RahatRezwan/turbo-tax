import { createBrowserRouter } from 'react-router-dom';
import App from '../pages/App';
import Main from '../layouts/Main';
import Confirmation from '../pages/Confirmation';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
      children: [
         {
            path: '/',
            element: <App />,
         },
         {
            path: '/confirmation',
            element: <Confirmation />,
         },
      ],
   },
]);
