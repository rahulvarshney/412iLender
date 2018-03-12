import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar () {
  return (
    <div className='sidebar-list'>
      <Link to='/'>Home</Link>
      <nav className='nav-links'>
        <Link to='/players'>Players</Link>
        <Link to='/teams'>Teams</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/loan/application'>Loan Application</Link>
        <Link to='/loan/disclosures'>Loan Disclosures</Link>
        <Link to='/appointment'>Appointment</Link>
        <Link to='/directions'>Directions</Link>
        <Link to='/loan/info'>Loan Info</Link>
        <Link to='/loan/calculators'>Loan Calculators</Link>
        <Link to='/quote'>Rate Quote</Link>
        <Link to='/testimonials'>Client Testimonials</Link>
        <Link to='/glossary'>Finance Glossary</Link>
      </nav>
    </div>
  )
}