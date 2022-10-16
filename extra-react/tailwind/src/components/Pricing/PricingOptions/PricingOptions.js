import React from 'react';
import Feature from './Feature/Feature';


const PricingOptions = ({ option }) => {
    const { features } = option
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h3><span className='text-6xl font-bold'>{option.price}</span>
                    <span className='text-2xl'>/month</span></h3>
                <p className='text-3xl'>{option.name}</p>
            </div>
            {
                features.map((feature, id) => <Feature key={id} feature={feature}></Feature>)
            }
            <button className='bg-green-500 mt-4 w-full rouned-md py-2 font-bold'>Buy Now</button>

        </div>
    );
};

export default PricingOptions;