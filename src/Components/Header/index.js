import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="container" id="home">
        <nav className="nav-bar">
          <img
            src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg"
            alt="nxtwave-logo"
          />
          <ul className="nav-items-container">
            <li>
              <a href="#home" className="home-link">
                Home
              </a>
            </li>
            <li>Programs</li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              {' '}
              <a
                href="https://www.ccbp.in/hire"
                target="_blank"
                rel="noreferrer"
              >
                Hire with Us
              </a>
            </li>
            <li>
              <button type="button" className="btn btn-outline-primary">
                <a
                  href="https://accounts.ccbp.in/login?client_id=otg&call_back_url=https://learning.ccbp.in/&mode=otp&WINDOW_MODE=IN_APP"
                  target="_blank"
                  rel="noreferrer"
                  className="login-link"
                >
                  Login --&gt;
                </a>
              </button>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-outline-primary login-button"
          >
            <a
              href="https://accounts.ccbp.in/login?client_id=otg&call_back_url=https://learning.ccbp.in/&mode=otp&WINDOW_MODE=IN_APP"
              target="_blank"
              rel="noreferrer"
              className="login-link"
            >
              Login --&gt;
            </a>
          </button>
        </nav>
      </div>
    )
  }
}

export default Header
