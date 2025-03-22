import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Data from './pages/Data.jsx'
import Stats from './pages/Stats.jsx'
import Home from './pages/Home.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/data",
        element: <Data/>
      },
      {
        path: "/stats",
        element: <Stats/>
      }
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
