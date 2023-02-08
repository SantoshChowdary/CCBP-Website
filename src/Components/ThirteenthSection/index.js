import {Component} from 'react'
import {
  BsWhatsapp,
  BsMailbox,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs'
import './index.css'

class FooterSection extends Component {
  render() {
    return (
      <div className="footer-section">
        <div className="footer-1">
          <div className="sub-footer-1">
            <h1>
              Nxt
              <br />
              Wave<sup>TM</sup>
            </h1>
            <p className="reach-us-para">Reach Us</p>
            <div className="reach-us-div">
              <BsWhatsapp />
              <p>
                +919390111761
                <br />
                (WhatsApp only)
              </p>
            </div>
            <div className="reach-us-div">
              <BsMailbox />
              <p>support@nxtwave.tech</p>
            </div>
          </div>
          <div className="sub-footer-2">
            <p>Quick Links</p>
            <div className="ul-div">
              <ul>
                <li>Home</li>
                <li>Academy</li>
                <li>Intensive</li>
                <li>Hire with us</li>
                <li>Contact Us</li>
              </ul>
              <ul>
                <li>About Us</li>
                <li>Reviews</li>
                <li>Community</li>
                <li>4.0 Champions</li>
                <li>NxtWave&apos;22 Review</li>
              </ul>
            </div>
          </div>
          <div className="sub-footer-3">
            <p>Payment Methods</p>
            <div className="payment-modes">
              <img
                src="https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/61f3c93dfbc8568fcb27e556_visa-icon.svg"
                alt="visa"
              />
              <img
                src="https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/61f3c976a29a435d3fc17f27_mastercard-icon.svg"
                alt="master card"
              />
              <img
                src="https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/61f3fcf36619310922216dcb_payment-method-icon3.svg"
                alt="master card"
              />
              <br />
              <img
                src="https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/61f3fcf46ba93fa0919d5828_Razor-pay-icon.svg"
                alt="razorpay"
              />
              <img
                src="https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/61f3fcf34a02bed6c7dbc750_upi-icon.svg"
                alt="UPI"
              />
              <img
                src="https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/61f3fd566ba93f145d9d5b57_rupay-icon.svg"
                alt="rupay"
              />
            </div>
            <div className="address">
              <img
                src="https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/618dff87c4047e7681214d33_location%20on.svg"
                alt="location"
              />
              <p>
                Plot No 30, East Wing, Ground <br />
                Floor, Financial District, <br />
                Nanakramguda, <br />
                Serilingampalli, Hyderabad, <br />
                Rangareddy - 500032
              </p>
            </div>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="footer-2">
          <div className="footer-2-sub-1">
            <BsInstagram />
            <BsTwitter />
            <BsYoutube />
          </div>
          <ul className="footer-2-sub-2">
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms and Conditions</li>
            <li>Grievance Redressal</li>
            <li>Corporate Information</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default FooterSection
