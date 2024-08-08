import React from 'react'
import ChartHome from './components/ChartHome'
import ArticleCard from './components/ArticleCard'
import BtnRoutes from './components/BtnRoutes'
import RequestAdmin from './components/RequestAdmin'
import CardsDashHome from './components/CardsDashHome'
import Cookies from 'js-cookie';

export default function DashboardHome() {
  const userRole = Cookies.get('userRole');
  return (
    <div className='my-4 mx-3 flex flex-wrap justify-around w-full overflow-y-scroll overflow-x-clip'>
        <div>
        <ArticleCard/>
        <ChartHome/>
        <CardsDashHome/>
        </div>
        <div>
          {userRole === 'Track Super Admin'&&(
            <BtnRoutes/>
          )}
            <RequestAdmin/>
        </div>
        
    </div>
  )
}
