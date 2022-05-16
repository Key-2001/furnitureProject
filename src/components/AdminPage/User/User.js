import React,{useEffect} from 'react'
import {getAllUsers} from '../../../services/userService'

const User = () => {

  useEffect(async () => {
    const users = await getAllUsers();
    console.log(users);
  },[])

  return (
    <div>User</div>
  )
}

export default User