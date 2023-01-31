import {Component} from 'react'
import './index.css'

class AwardsSection extends Component {
  render() {
    return (
      <div className="awards-section">
        <div className="awards-first-div">
          <div className="awards-sub-div-1">
            <div className="awards-sub-div-2">
              <img
                src="https://nxtwave.imgix.net/ccbp-website/Home/award-section/award-image.png?auto=format,compress&q=80"
                alt="award"
              />
              <h1>
                <span>Recognized as</span>
                <br />
                Best Tech Skilling <br />
                EdTech Company <br />
                of the year 2022
              </h1>
            </div>
            <img
              src="https://nxtwave.imgix.net/ccbp-website/Home/award-section/award-logo.png?auto=format,compress&q=80"
              alt="business-awards-pic"
              className="business-awards-pic"
            />
          </div>
        </div>
        <img
          src="https://nxtwave.imgix.net/ccbp-website/Home/award-section/award-taking-image.png?auto=format,compress&q=80"
          alt="sonali-award"
          className="sonali-award"
        />
      </div>
    )
  }
}

export default AwardsSection
