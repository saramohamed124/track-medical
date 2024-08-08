import React, { useState } from 'react';
import { dealsData } from '../../json/dealsData';

// imgs
import location_icon from '../assets/icons/location.svg';
import deal_icon from '../../Home/assets/imgs/hospital.png';

export default function DealInfo() {
    const deal = dealsData[0] || {};
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const description = deal.description || 'No description available';

    // Create a truncated version of the text
    const maxLength = 150; 
    const truncatedDescription = description.length > maxLength
        ? description.substring(0, maxLength) + '...'
        : description;
    return (
        <div className="deal-info avenir-heavy text-black flex justify-between gap-4 my-5 flex-col lg:flex-row">
            <img src={deal_icon} alt="Deal background" className="deal-icon" />
            <div className="deal-details">
                <div className="deal-header">
                    <h2 className='text-xl my-4 text-center sm:text-start'>{deal.title || 'No title available'}</h2>
                    <p className='avenir-book text-gray-500 '>
                {isExpanded ? description : truncatedDescription}
            </p>
            <button 
                onClick={toggleReadMore} 
                className='text-blue-500 mt-2'
            >
                {isExpanded ? 'عرض أقل' : 'اقرأ المزيد'}
            </button>                </div>
                <div className="deal-footer flex justify-between items-center sm:items-start gap-4 sm:gap-0 flex-col sm:flex-row my-2">
                    <button className='bg-[--main-color-orange] avenir-book py-2 px-10 rounded-sm'>احجز الان</button>
                    <div className="deal-location flex gap-3 items-center">
                        <img className='w-6' src={location_icon} alt="Location icon" />
                        {/* <span>{deal.hospitalName || 'Unknown hospital'}</span> */}
                            <span className='text-blue-500 underline'>المستشفى الملكي</span>
                </div>
                    <div className="deal-price">
                        {/* <p>{deal.price ? `${deal.price} ر.س` : 'No price available'}</p> */}
                        <p>769 ر.س</p>
                        {/* <del>{deal.originalPrice ? `${deal.originalPrice} ر.س` : 'No original price'}</del> */}
                        <del className='avenir-book text-sm text-gray-400'>850 ر.س</del>
               </div>
                </div>
            </div>
        </div>
    );
}
