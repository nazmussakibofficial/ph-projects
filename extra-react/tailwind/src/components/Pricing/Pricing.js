import React from 'react';
import PricingOptions from './PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: "Free", price: 0, features: ["Awesome", "Extra"] },
        { id: 2, name: "Medium", price: 9.99, features: ["Awesome", "Extra"] },
        { id: 3, name: "Premium", price: 19.99, features: ["Awesome", "Extra"] },
    ]
    return (
        <div className='grid md:grid-cols-3 gap-3 mt-4'>
            {
                pricingOptions.map(option => <PricingOptions key={option.id} option={option}>

                </PricingOptions>)
            }

        </div>
    );
};

export default Pricing;