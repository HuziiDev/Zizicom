import React from 'react'

const Contact = () => {
  return (
    <div className='w-[90%] rounded-xl  h-auto mt-20 flex flex-col items-center'>
        <div className="curious pl-10 py-20 ml-20 ">
            <h1 className='text-white text-[2.6rem] font-extrabold md:text-[3.5rem] md:ml-16'>Curious how we do it?</h1>
            <button className='px-24 text-xl py-3 rounded-full mt-8 font-semibold bg-white md:px-36 md:ml-40 transition ease-in-out delay-150  hover:bg-gray-700 hover:text-white hover:border-2 hover:border-green-700' >Contact us</button>
        </div>
    </div>
  )
}

export default Contact