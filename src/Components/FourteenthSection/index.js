import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class PolicySection extends Component {
  state = {isAccepted: true}

  setCookie = () => {
    Cookies.set('Cookies', 'Accepted', {expires: 1000})
    const a = Cookies.get('Cookies')
    console.log(a)
    this.setState({isAccepted: false})
  }

  render() {
    const {isAccepted} = this.state
    return (
      <>
        {isAccepted && (
          <div className="policy-section">
            <p>
              By continuing to use this website, you accept our
              <a href="https://www.ccbp.in/terms-and-conditions"> Terms </a> and
              <a href="https://www.ccbp.in/cookie-policy"> Cookie Policy.</a>
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.setCookie}
            >
              OK
            </button>
          </div>
        )}
      </>
    )
  }
}

export default PolicySection
