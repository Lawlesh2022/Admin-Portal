import React from 'react'
import "./Home.css"
import Featuredinfo from '../components/Featuredinfo'
import Chart from '../components/Chart'
import { userData } from '../Dummydata'

const Home = () => {
  return (
    <div className = "home">
        <Featuredinfo/>
        <Chart data={userData} title = "User Analytics" dataKey = "ActiveUser" grid/>
    </div>
  )
}

export default Home