import React from 'react';
import {Link} from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';

 const BackButton = ({destination = '/'}) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-800 text-white px-4 py-4 py-1 roundeded-lg w-fit'>
        <BsArrowLeft className='text-21'/>
        </Link>
    </div>
  )
}


export default BackButton;
