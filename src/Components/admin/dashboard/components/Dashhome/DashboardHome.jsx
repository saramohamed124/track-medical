import React from 'react'
import ChartHome from './components/ChartHome'
import ArticleCard from './components/ArticleCard'
import BtnRoutes from './components/BtnRoutes'
import RequestAdmin from './components/RequestAdmin'
import CardsDashHome from './components/CardsDashHome'

export default function DashboardHome() {
  return (
    <div className='my-4 mx-3 flex flex-wrap justify-around w-full overflow-y-scroll overflow-x-clip'>
        <div>
        <ArticleCard/>
        <ChartHome/>
        <CardsDashHome/>
        </div>
        <div>
            <BtnRoutes/>
            <RequestAdmin/>
        </div>
        
    </div>
  )
}
