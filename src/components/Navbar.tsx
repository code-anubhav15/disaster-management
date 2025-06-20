import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-around items-center p-5 border-b-1 border-gray-300 shadow-2xl'>
      <div className='flex flex-row items-center'>
        <img src="" alt="" />
        <h1>Disaster Management</h1>
      </div>
      <div >
        <ul className='flex flex-row items-center'>
          <li>Home</li>
          <li>Relief Camps</li>
          <li>About</li>
        </ul>
      </div>
      <div className='flex flex-row items-center'>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
