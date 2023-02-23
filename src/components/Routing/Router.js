import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import { Favourites } from './Routes/Favourites'
import { Search } from './Routes/Search'

export const MSRouter = () => 
    <RouterProvider router={router} />

const router = createBrowserRouter([
  {
    path: '/',
    element: <Search />
    // errorElement: <ErrorPage />,
  },
//   {
//     path: 'favourites',
//     element: <Favourites />
//   }
])
