import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './Login';
import Register from './Register';
import AuthProvider from './Providers/AuthProvider';
import Order from './components/Order';
import PrivateRouts from './routes/PrivateRouts';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/order',
        element: <PrivateRouts><Order></Order></PrivateRouts>
      },
      {
        path: '/profile',
        element: <PrivateRouts><Profile></Profile></PrivateRouts>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
