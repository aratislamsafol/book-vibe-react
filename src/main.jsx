import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './componenets/Root/Root';
import Home from './componenets/Home/Home';
import ErrorPage from './componenets/ErrorPage/ErrorPage';
import DashBoard from './componenets/DashBoard/DashBoard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/", Component: Root, errorElement: ErrorPage,
    children:([
      {
        path: "/", Component: Home
      },
      {
        path: 'dashboard', Component: DashBoard
      }
    ])
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
