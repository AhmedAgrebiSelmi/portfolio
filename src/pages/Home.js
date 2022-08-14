import React from 'react'
import devImage from '../images/photo-2.png'

function Home() {
  return (
    <div>
      <img src="/images/profile-2.jpg" alt="Profile photo" width="100px" />
      <p>Hello my names is Ahmed Agrebi Selmi, i am a Web Devoloper</p>
      <img src={devImage} alt="Web Image" width="40%" />
    </div>
  )
}

export default Home