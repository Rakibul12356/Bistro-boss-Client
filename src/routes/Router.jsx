import React from 'react';

import { createBrowserRouter} from "react-router-dom";
import MainLayOut from '../layout/MainLayOut';
import ErrorElement from '../error/ErrorElement';
import Home from '../pages/Home/Home';
import OurMenu from '../pages/OurMenu/OurMenu';
import Order from '../pages/order/order/Order';
import Login from '../pages/AhuthenticationPages/Login/Login';
import SignUp from '../pages/AhuthenticationPages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../layout/dashboard/Dashboard';
import Cart from '../pages/dashboard/cart/Cart';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/our-menu',
          element:<PrivateRoute><OurMenu></OurMenu></PrivateRoute>
        },
        {
          path:'/order/',
          element:<PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
         path:'/login',
         element:<Login></Login> 
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard/cart',
          element:<Cart></Cart>
        }
      ]
    }
  ]);
export default router;