import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Categories from './pages/Categories';
import RecipeList from './pages/RecipeList';
import RecipeDetails from './pages/RecipeDetails'

const router = createBrowserRouter([
  {
    path: "/recipes/:id",
    element: <RecipeDetails />,
  },
  {
    path: "/recipes",
    element: <RecipeList />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Categories  />
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
