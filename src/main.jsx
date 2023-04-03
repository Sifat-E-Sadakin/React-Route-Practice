import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Info from './Friends/Friends';
import Friends from './Friends/Friends';
import Infos from './Info/Info';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
     children: [
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
    {
      path: "/home",
      element: <Home></Home>
    },
    {
      path: "/infos/:setInfos",
      element: <Infos></Infos>,
      loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.setInfos}`)
    },
    {
      path: "/friends",
      element: <Friends></Friends>,
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
    },
    {
      path: "*",
      element: <div>4444444044444444</div>
    }
   
  ]
}
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
