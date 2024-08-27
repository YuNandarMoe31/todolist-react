import React from 'react'
import { BiXCircle } from "react-icons/bi";

const List = () => {
  return (
    <ul className='list-none w-full md:w-1/3 flex flex-col gap-y-4 justify-center'>
      <li className='bg-gray-600 text-gray-200 py-4 px-3 rounded-lg transition duration-200 hover hover:bg-gray-700 flex justify-between items-center'>
        <p>To record lesson</p>
        <BiXCircle />
      </li>
      <li className='bg-gray-600 text-gray-200 py-4 px-3 rounded-lg transition duration-200 hover hover:bg-gray-700 flex justify-between items-center'>
        <p>To record lesson</p>
        <BiXCircle />
      </li>
      <li className='bg-green-600 text-gray-200 py-4 px-3 rounded-lg transition duration-200 hover hover:bg-gray-700 flex justify-between items-center'>
        <p>To record lesson</p>
        <BiXCircle />
      </li>
    </ul>
  )
}

export default List
