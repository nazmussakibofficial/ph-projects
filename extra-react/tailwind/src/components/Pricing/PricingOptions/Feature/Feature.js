import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className=' h-6 w-6 text-gren-500'></CheckCircleIcon>
            <p>{feature}</p>
        </div>
    );
};

export default Feature;