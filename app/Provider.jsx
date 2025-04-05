'use client'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from './_context/UserDetailContext';
import { useState } from 'react';

function Provider({ children }) {  // Destructure children from props

  const { user } = useUser();
  const [userDetails, setUserDetails] = useState([]);


  useEffect(() => {
    user && VerifyUser()
  },[user])
  
  const VerifyUser= async() => {
      const dataResult = await axios.post('/api/verify-user', {
        user:user
      })
      setUserDetails(dataResult.data.result)
      console.log(dataResult.data)
  }
  
  return (
    <UserDetailContext.Provider  value ={{userDetails, setUserDetails}}>
      <div>
      {children}
    </div>
    </UserDetailContext.Provider>   
  );
}

export default Provider;