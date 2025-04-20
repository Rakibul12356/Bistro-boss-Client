import React from 'react';

import { createBrowserRouter} from "react-router-dom";
import MainLayOut from '../layout/MainLayOut';
import ErrorElement from '../error/ErrorElement';
import Home from '../pages/Home/Home';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);
export default router;