import { StrictMode } from 'react'
import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './componenets/Root/Root';
import Home from './componenets/Home/Home';
import ErrorPage from './componenets/ErrorPage/ErrorPage';
import DashBoard from './componenets/DashBoard/DashBoard';
import {loaderData} from './componenets/utils/LoaderData.js';
import BookDetails from './componenets/BookDetails/BookDetails.jsx';
import ListedBooks from './componenets/ListedBooks/ListedBooks.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />, errorElement: <ErrorPage />,
    children:[
      {
        path: "/", element: <Home />, 
        loader: loaderData('/booksData.json') 
      },
      {
        path: 'dashboard', element: <DashBoard />
      },
      {
        path: 'books/:bookId',
        element: <BookDetails/>,
        loader: loaderData('/booksData.json') 
      }, 
      {
        path: 'listeditems',
        element: <ListedBooks/>,
        loader: loaderData('/booksData.json') 
      },
      {
        path: 'listeditems/books/:bookId',
        element: <BookDetails/>,
        loader: loaderData('/booksData.json') 
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    <ToastContainer />
  </StrictMode>,
)
