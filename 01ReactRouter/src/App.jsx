import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'
import Home from './componenets/Home'
import Product from './componenets/Product'
import ProductDetail from './componenets/Product-Details'
import MainNevigation from './componenets/MainNevigation'
import RootLayOut from './componenets/Root'
import AdminHome from './componenets/AdminHome'
import RootAdminLayOut from './componenets/RootAdminLayOut'
import AdminHome2 from './componenets/AdminHome2'
import Login from './componenets/Login'
import Profile from './componenets/Profile'
import Auth from './componenets/Auth'
import ErrorComponent from './componenets/ErrorComponent.component'
function App() {
  const [count, setCount] = useState(0)
  const routers = createBrowserRouter(
    [
      {
        path: '/', element: <RootLayOut />,
        errorElement: <ErrorComponent />,
        children: [
          { path: '', element: <Auth> <Home /> </Auth> },
          {
            path: 'login', element: <Login />
          },
          { path: 'profile/:username', element: <Auth> <Profile /> </Auth> },
          {
            path: 'product', element: <Product />, loader: () => {
              return "loader is called"
            }
          },
          { path: 'product-details/:id', element: <ProductDetail /> },
        ]
      },
      {
        path: '/admin', element: <RootAdminLayOut />,
        children: [
          { path: '', element: <AdminHome /> },
          { path: 'home', element: <AdminHome2 /> },
        ]
      }
    ]
  );
  return (
    <RouterProvider router={routers}>

    </RouterProvider>
  )
}

export default App;
