
import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'

const Dashboard = () => {

    const [data,setData] = useState({
        totalCars: 0,
        totalBookings:0,
        oendingBookings:0,
        completedBookings: 0,
        recentBookings: 0,
        monthlyRevenue: 0,
    })

    const dashboardCards = [
        {title: "Total Cars", value: data.totalCars, tcon: assets.carIconColored},
        {title: "Total Bookings", value: data.totalBookings, tcon: assets.listIconColored},
        {title: "Pendings", value: data.pendingBookings, tcon: assets.cautionIconColored},
        {title: "Confirmed", value: data.completedBookings, tcon: assets.listIconColored},
    ]

    useEffect(()=>{
        setData(dummyDashboardData)
    },[])


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard