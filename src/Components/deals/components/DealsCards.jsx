import React, { useState, useEffect } from 'react';
import deal_img from '../../Home/assets/imgs/hospital.png';
import { dealsData } from '../../json/dealsData';
import double_left_icon from '../../hospitals/assets/icons/double-left.svg'
function DealsCards() {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        const deals = [...dealsData]
        setDeals(deals)
        
    }, []);

    return (
        <div className='cards-flex'>
            {deals.map(deal => (
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
            <div className="flex-box-center my-8 avenir-heavy">
        <button className="btn-prev-next">الصفحة السابقة</button>
        <button className="btn-numbers">1</button>
        <button className="btn-numbers">2</button>
        <button className="btn-numbers hidden sm:block">3</button>
        <button className="btn-numbers hidden sm:block">4</button>
        <button className="btn-numbers hidden sm:block">5</button>
        <button className="flex-box-center h-[2.2rem] px-1 py-2 mx-1 bg-white text-black rounded-[50%] border">
          <img className='min-w-[25px] w-[92%]' src={double_left_icon} alt='double-left-icon' />
        </button>
        <button className="btn-prev-next">الصفحة التالية</button>
      </div>
        </div>
    );
}

export default DealsCards;
