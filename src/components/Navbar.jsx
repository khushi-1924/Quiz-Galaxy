import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full shadow-2xl flex items-center justify-between px-7 py-1'>
        <img src="https://t4.ftcdn.net/jpg/03/39/22/77/360_F_339227713_IiNmccaXnoosw8tudUvCjTHU1ZJWr8p0.jpg" className='invert h-16 w-16 border rounded-full' alt="" />
      <h1 className='text-center text-4xl text-sky-200 font-bold flex-1 mx-auto'>Quiz Galaxy</h1>
      <h2 className='text-xl text-sky-100'>Welcome Khushi</h2>
    </div>
  )
}

export default Navbar
