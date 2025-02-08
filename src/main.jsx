import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import JobPosting from './pages/JobPosting.jsx'
import PostJob from './pages/PostJob.jsx'
import ViewJobPost from './pages/ViewJobPost.jsx'
const router=createBrowserRouter([{
  path:"/",
  element:<App/>
},{
  path:"/jobpost",
  element:<JobPosting/>
},{
  path:"/postjob",
  element:<PostJob/>
},{
  path:"/viewjob/:id",
  element:<ViewJobPost/>
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
