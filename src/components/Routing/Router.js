import { Layout } from 'components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Favourites } from './Routes/Favourites'
import { Search } from './Routes/Search'

export const MSRouter = () =>
  <RouterProvider router={router} />

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Search /></Layout>
  }
//   {
//     path: 'favourites',
//     element: <Layout><Favourites /></Layout>
//   }
])
