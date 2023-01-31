import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <img
          src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg"
          alt="nxtwave-logo"
        />
        <ul className="nav-items-container">
          <li style={{color: '#4F46E5'}}>Home</li>
          <li>Programs</li>
          <li>Reviews</li>
          <li>Hire with Us</li>
          <li>Login</li>
        </ul>
      </nav>
    )
  }
}

export default Header