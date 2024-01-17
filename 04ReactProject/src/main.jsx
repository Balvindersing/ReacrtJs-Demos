import React, { Children, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainContext from './components/mainContent.jsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import BookList from './components/bookList.jsx';
//import { DUMMYDATA } from './MockDATA.js';
//import Home from './components/home.jsx';
//import { Outlet } from 'react-router-dom';
import ErrorPage from './components/errorPage';
const BookDetail = lazy(() => import('./components/bookDetail'));
const BookList = lazy(() => import('./components/bookList'));

const routers = createBrowserRouter(
  [
    {
      path: "",
      element: <MainContext />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <App />
        },
        {
          path: "home",
          element: <App />
        },
        {
          path: "book-list",
          element: <BookList />,
        },
        {
          path: "book-detail/:id",
          element: <BookDetail />
        }

      ]
    },

  ]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}>
  </RouterProvider>,
)
