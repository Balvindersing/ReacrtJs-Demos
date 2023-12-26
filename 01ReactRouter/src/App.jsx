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
function App() {
  const [count, setCount] = useState(0)
  const routers = createBrowserRouter(
    [
      {
        path: '/', element: <RootLayOut />,
        children: [
          { path: 'home', element: <Home /> },
          { path: 'product', element: <Product /> },
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
