import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import React from 'react'
import "./Feacheredinfo.css"

const Featuredinfo = () => {
  return (
    <div className = "featured">
        <div className = "featuredItem">
            <span className = "featuredTitle">Revenue</span>
            <div className = "featuredMoneyContainer">
                <span className = "featuredMoney">$2,415</span>
                <span className = "featuredMoneyRate">
                    +11.4<ArrowUpward className = "featuredIconu"/>
                </span>
            </div>
            <spsn className = "featuredSub">Compared to last month</spsn>
        </div>
        <div className = "featuredItem">
            <span className = "featuredTitle">Slaes</span>
            <div className = "featuredMoneyContainer">
                <span className = "featuredMoney">$4,415</span>
                <span className = "featuredMoneyRate">
                    +21.4<ArrowUpward className = "featuredIconu"/>
                </span>
            </div>
            <spsn className = "featuredSub">Compared to last month</spsn>
        </div>
        <div className = "featuredItem">
            <span className = "featuredTitle">Cost</span>
            <div className = "featuredMoneyContainer">
                <span className = "featuredMoney">$2,221</span>
                <span className = "featuredMoneyRate">
                    -1.4<ArrowDownward className = "featuredIcond"/>
                </span>
            </div>
            <spsn className = "featuredSub">Compared to last month</spsn>
        </div>
    </div>
  )
}

export default Featuredinfo