import React, { useState, useEffect } from 'react';
import deal_img from '../../../assets/imgs/hospital.png';
import { dealsData } from '../../../../json/dealsData';

function CardDeals() {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        const deals = [...dealsData]
        setDeals(deals)
        
    }, []);

    const limitedDeals = deals.slice(0, 3);

    return (
        <div className='cards-flex'>
            {limitedDeals.map(deal => (
                <div 
                    key={deal.id} 
                    className='flex-box-center w-[300px] h-[300px] overflow-hidden'
                    style={{ 
                        backgroundImage: `url(${deal_img})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                    }}
                >
                    <span 
                        className='w-full flex-box-center bg-[--main-color-orange] p-6 avenir-heavy text-black text-xl text-center cursor-pointer box'
                    >
                        {deal.title}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default CardDeals;
