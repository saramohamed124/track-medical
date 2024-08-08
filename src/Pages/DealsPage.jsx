import React from 'react'
import Header from '../Components/Home/components/header/Header'
import DealsCards from '../Components/deals/components/DealsCards'
import SearchDeals from '../Components/deals/components/SearchDeals'

export default function DealsPage() {
  return (
    <div>
      <Header/>
      <div className='container'>
      <h1 className="heading-cards-flex " style={{margin:'5rem'}}>العروض والتخفيضات</h1>
      <SearchDeals/>
        <DealsCards/>
      </div>
    </div>
  )
}
