import React from 'react'
import Header from '../Components/Home/components/header/Header'
import DealInfo from '../Components/deal/components/DealInfo'
import CardDeals from '../Components/Home/components/deals/components/CardDeals'
import AdsPanner from '../Components/AdsPanner'

export default function DealsInfoPage() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <DealInfo/>
        <h2 className="text-3xl text-black avenir-heavy py-2 border-b-4 border-[--main-color-orange] w-fit mb-3 mx-auto lg:mx-0">عروض اخرى</h2>
        <div className='w-fit grid grid-cols-1 md:grid-cols-2 gap-3 place-items-start justify-items-center lg:justify-items-end another-deals' >
        <CardDeals/>
        <AdsPanner/>
        </div>
        </div>
    </div>
  )
}
