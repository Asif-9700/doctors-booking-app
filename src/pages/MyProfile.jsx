import React, { useState } from 'react'

const MyProfile = () => {

  const[userData,setUserData]=useState({
    name:"Edward Vincent",
    image:assets.profile_pic,
    email:'richard@gmail.com',
    address:{
      line1:"57th Cross, Richmond",
      line2: "Circle, Chruch Road, London"
    },
    gender:'Male',
    dob:'2000-02-25'
  })
  return (
    <div>
      <img src={userData.image} alt="" />
    </div>
  )
}

export default MyProfile
