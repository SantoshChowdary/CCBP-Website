import {Component} from 'react'
import './index.css'

class InvestorsData extends Component {
  render() {
    return (
      <div className="investors-section">
        <div className="investors-top-section">
          <p>Announcing Our Pre-Series A Funding</p>
          <h1>New Partners in Our Journey</h1>
          <div className="investing-companies-div">
            <img
              src="https://assets-global.website-files.com/615d6c87832c4ac10f88ffa7/61976f920f41f80da2d29a0c_Frame%20445.png"
              alt="orios"
            />
            <img
              src="https://assets-global.website-files.com/615d6c87832c4ac10f88ffa7/61976f92af5a21287fd691a8_Frame%207166.png"
              alt="better"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default InvestorsData
