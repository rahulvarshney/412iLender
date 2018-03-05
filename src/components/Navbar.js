import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HoverExample extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div>
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          Hover Me
        </div>
        {
          this.state.isHovering &&
          <div>
            Hovering right meow! 🐱
          </div>
        }
      </div>
    );
  }
}

export default function Navbar () {
  return (
    <div className='container navbar'>
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
        <HoverExample />
      </nav>
    </div>
  )
}