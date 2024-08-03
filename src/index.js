import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from "./pages/HomePage"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
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
