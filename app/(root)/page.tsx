import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <p>Welcome to Imaginify</p>
      <UserButton />
    </div>
  )
}

export default Home
