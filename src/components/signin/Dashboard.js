import React from 'react'
import UserList from './UserList'
//import { useLocation } from 'react-router-dom';
function Dashboard() {
 // let {state}=useLocation() 
   return (
    <div><p className='display-6 text-end text-info fS-2'>Welcome  !</p>
    <p className='display-6 text-end text-primary fs-2'></p>
    <UserList/>
    </div>
  )
}


export default Dashboard