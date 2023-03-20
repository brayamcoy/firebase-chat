import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Chats</span>
      <div className="user">
        <span>{currentUser.displayName}</span>
        <img src={currentUser.photoURL} alt="profile-avatar" />
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar