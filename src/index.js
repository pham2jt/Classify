import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import CurriculumEffectiveness from './pages/curriculumEffectiveness';
import './index.css'; // Your global styles
import "@fontsource/inter/600.css"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/curriculumEffectiveness",
    element: <CurriculumEffectiveness />,
  },
])

ReactDOM.render((
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  ), document.getElementById('root')
);