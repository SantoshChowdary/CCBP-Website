import {Component} from 'react'
import './index.css'

const mentorDetails = [
  {
    id: 1,
    heading: 'Trainers are alumni of IITs and Top MNCs',
    image1Url:
      'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/team/Rahul_trainer.png',
    image2Url:
      'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/team/spandana_trainer.png',
    person1Name: 'Rahul',
    person1Job: 'Ex. Amazon',
    person2Name: 'Spandana',
    person2Job: 'Ex. Microsoft',
  },
  {
    id: 2,
    heading: 'Career Coaches help you land your first job',
    image1Url:
      'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/team/sriram_teja_career_coach.png',
    image2Url:
      'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/team/Trivikram_career_coach.png',
    person1Name: 'Sriram Teja',
    person1Job: 'AIR 84, IIT Bombay',
    person2Name: 'Trivikram',
    person2Job: 'AIR 93, IIT Delhi',
  },
  {
    id: 3,
    heading: 'Get doubts resolved by Product Developers',
    image1Url:
      'https://nxtwave.imgix.net/ccbp-website/intensive/team/Chinmaya.png?auto=format,compress&q=80',
    image2Url:
      'https://nxtwave.imgix.net/ccbp-website/intensive/team/revanth_product_developer.jpg?auto=format,compress&q=80',
    person1Name: 'Chinmaya',
    person1Job: 'Lead Software Developer IIT Kharagpur',
    person2Name: 'Revanth',
    person2Job: 'Backend Architect IIT Guwahati',
  },
  {
    id: 4,
    heading: 'Gain expert insights from Masterclasses',
    image1Url:
      'https://nxtwave.imgix.net/ccbp-website/intensive/team/Master_class_Rakesh_misra.png?auto=format,compress&q=80',
    image2Url:
      'https://nxtwave.imgix.net/ccbp-website/intensive/team/pranavi_master_class.png?auto=format,compress&q=80',
    person1Name: 'Rakesh Misra',
    person1Job: 'Cofounder, Uhana Stanford Alumnus',
    person2Name: 'Pranavi',
    person2Job: 'Machine Learning Scientist, Apple',
  },
]

class MentorsSection extends Component {
  render() {
    return (
      <div className="mentors-section">
        <h1>
          Our top-notch team helps you learn Programming, not just Coding!
        </h1>
        <ul className="main-div">
          {mentorDetails.map(item => (
            <li className="mentor-list">
              <h3>{item.heading}</h3>
              <div className="profiles-div">
                <div className="sub-div-1">
                  <img
                    src={item.image1Url}
                    alt={item.person1Name}
                    className="mentor-image"
                  />
                  <p>{item.person1Name}</p>
                  <p>{item.person1Job}</p>
                </div>
                <div className="sub-div-1">
                  <img
                    src={item.image2Url}
                    alt={item.person2Name}
                    className="mentor-image"
                  />
                  <p>{item.person2Name}</p>
                  <p>{item.person2Job}</p>
                </div>
              </div>
              <p className="many-more-para">and more...</p>
            </li>
          ))}
        </ul>
        <a
          href="https://forms.ccbp.in/public/form/talk-to-career-expert"
          target="_blank"
          rel="noreferrer"
          className="mentor-demo-link"
        >
          Request a Callback
        </a>
      </div>
    )
  }
}

export default MentorsSection
