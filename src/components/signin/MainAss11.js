import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
function MainAss11() {
    let router=createBrowserRouter([
        {
            path:'',
            element:<RootLayout/>,
            errorElement:<div className="heading  mx-auto display-6 justify-content-center "> Page Not Found</div>,
            children:[
                {
                    path:'',
                    element:<Home/>

                },
                {
                    path:'signup',
                    element:<Register/>

                },
                {
                    path:'Login',
                    element:<Login/>

                },
                {
                    path:'dashboard',
                    element:<Dashboard/>

                },
                
            ]
        }
    ]);
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default MainAss11