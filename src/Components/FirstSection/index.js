import {Component} from 'react'
import AcademyDisplayCard from './AcademyDisplayCard/index'
import './firstSection.css'

const productDisplayCardsData = [
  {
    id: 'Academy',
    productLogoUrl:
      'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Academy-blue-logo.svg',
    studentImageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/academy-peron-photo.png?auto=format,compress&q=80',
    stringsList: ['POST 12TH / INTERMEDIATE', '1ST, 2ND, 3RD YEAR'],
    header: 'Learn like top IITians and achieve high-paid software jobs',
    batchStartDate: '30th Jan 2023',
    requestType: 'Request a Callback',
    requestLink: 'https://forms.ccbp.in/public/form/talk-to-career-expert',
    knowMoreLink: 'https://www.ccbp.in/academy',
  },
  {
    id: 'intensive',
    productLogoUrl:
      'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/intensive-2.0-logo.svg',
    studentImageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/intensive-person-photo.png?auto=format,compress&q=80',
    stringsList: ['GRADUATES', 'FINAL YEAR STUDENTS'],
    header: 'A Proven Program to make you a Software Developer',
    batchStartDate: '30th Jan 2023',
    requestType: 'Book a Free Demo',
    requestLink: 'https://www.ccbp.in/intensive',
    knowMoreLink: 'https://www.ccbp.in/intensive',
  },
]

class FirstSection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="first-section-display">
            <div className="first-div">
              <h1>
                Designed to transform you into a highly skilled Software
                Professional
              </h1>
              <p>Recognized as the Greatest Brand in Education</p>
              <img
                src="https://assets-global.website-files.com/615dca66d4ca6ac30a6860f9/61c165ca0870e98c450b7d87_award-design-line-desktop-2x.png"
                alt="arrow-logo"
                className="arrow-logo"
              />
              <div className="first-div-awards-section">
                <img
                  src="https://nxtwave.imgix.net/ccbp-website/intensive/landingpage/award1-design-desktop-2x.png?auto=format,compress&q=80"
                  alt="award-1"
                />
                <img
                  src="https://nxtwave.imgix.net/ccbp-website/intensive/landingpage/award2-design-desktop-2x.png?auto=format,compress&q=80"
                  alt="award-2"
                />
              </div>
            </div>
            <ul className="product-cards-list">
              {productDisplayCardsData.map(item => (
                <AcademyDisplayCard key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default FirstSection
