import React from 'react'
import Login from './Login'
import   Browse  from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Body = () => {

  const browseRouter = createBrowserRouter([
    {
      path: "/",
      element : <Login/>
   },
   {
     path : "/browse",
     element : <Browse/>
   }

]);


  return (   
    <div>
         <RouterProvider router={ browseRouter }/>
   </div>
  )


}

export default Body