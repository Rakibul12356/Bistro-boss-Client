import React from 'react';

import { createBrowserRouter} from "react-router-dom";
import MainLayOut from '../layout/MainLayOut';
import ErrorElement from '../error/ErrorElement';
import Home from '../pages/Home/Home';
import OurMenu from '../pages/OurMenu/OurMenu';
import Order from '../pages/order/order/Order';
import Login from '../pages/AhuthenticationPages/Login/Login';
import SignUp from '../pages/AhuthenticationPages/SignUp/SignUp';


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
          element:<OurMenu></OurMenu>
        },
        {
          path:'/order/',
          element:<Order></Order>
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
  ]);
export default router;