"use client";
import React, { useContext } from 'react'
import { UserDetailContext } from '../_context/UserDetailContext';

function GenerateLogo() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  
  return (
    <div className='mt-20'>GenerateLogo</div>
  )
}

export default GenerateLogo