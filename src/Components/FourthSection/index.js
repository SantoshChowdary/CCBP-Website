import {Component} from 'react'
import './index.css'

class AllCompanies extends Component {
  render() {
    return (
      <div className="all-companies-component">
        <h1>
          <span>1200+ </span>Companies have hired NxtWave<sup>TM</sup> learners
        </h1>
        <img
          src="https://nxtwave.imgix.net/ccbp-website/intensive/companies-hiring-section/hiring-companies-desktop.png?auto=format,compress&q=80"
          alt="companies"
        />
        <p>and many more...</p>
        <div className="all-companies-section">
          <a
            href="https://forms.ccbp.in/public/form/talk-to-career-expert"
            className="request-callback-button"
            target="_blank"
            rel="noreferrer"
          >
            Request a Callback
          </a>
          <a
            href="https://airtable.com/shrCSYHM7u355EWaO/tblSe6s8jrtSyhU9N"
            className="view-all-companies"
            target="_blank"
            rel="noreferrer"
          >
            View All Companies
          </a>
        </div>
      </div>
    )
  }
}

export default AllCompanies
