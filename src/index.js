import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from "./pages/HomePage"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HealthFacilitiesPage from './pages/HeathFacilitiesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"facilities/",
        element:<HealthFacilitiesPage/>
      }
    ]
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
