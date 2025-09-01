import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Your Class Name</h1>
      <p className="dashboard-tagline">Learn, Grow, Achieve</p>
      <button className="explore-button" onClick={() => navigate('/home')}>Explore</button>
    </div>
  )
}

export default Dashboard
