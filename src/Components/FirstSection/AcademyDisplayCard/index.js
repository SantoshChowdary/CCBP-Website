import {Component} from 'react'
import './index.css'

class AcademyDisplayCard extends Component {
  render() {
    const {item} = this.props
    return (
      <div className="academy-display-card">
        <div className="image-first-div">
          <img
            src={item.productLogoUrl}
            alt="product Logo"
            className="product-logo"
          />
          <img
            src={item.studentImageUrl}
            alt="student"
            className="student-image"
          />
        </div>
        <div className="second-div">
          <p className="first-para">{item.stringsList[0]}</p>
          <p className="second-para">{item.stringsList[1]}</p>
        </div>
        <h3 className="card-heading">{item.header}</h3>
        <div className="batch-data-div">
          <div className="batch-details">
            <p>BATCH STARTS ON</p>
            <p>{item.batchStartDate}</p>
          </div>
          <div className="limited-seats-div">
            <img
              src="https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/613c7fb7b24c436c1f828dce_flame%20(2)%201.svg"
              alt="fire"
            />
            <p>Limited Seats Available</p>
          </div>
        </div>
        <a
          href={item.requestLink}
          target="_blank"
          rel="noreferrer"
          className="book-demo-link"
        >
          {item.requestType}
        </a>
        <br />
        <a
          href={item.knowMoreLink}
          target="_blank"
          rel="noreferrer"
          className="know-more-link"
        >
          Know More
        </a>
      </div>
    )
  }
}

export default AcademyDisplayCard
