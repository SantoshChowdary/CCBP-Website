import {Component} from 'react'
import './index.css'

const masterClassMentorsList = [
  {
    id: 1,
    name: 'Srividya Pranavi',
    jobType: 'Machine Learning Scientist, Apple',
    university: 'Carnegie Mellon University, IIT Kharagpur',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/Srividya+Pranavi.png?auto=format,compress&q=80',
  },
  {
    id: 2,
    name: 'Sravya Nimmagadda',
    jobType: 'Senior Deep Learning Scientist, Autonomous Vehicles at NVIDIA',
    university: 'Stanford, IIT Madras',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/Sravya+Nimmagadda.png?auto=format,compress&q=80',
  },
  {
    id: 3,
    name: 'Priyatham Bollimpalli',
    jobType: 'Data & Applied Scientist II , Microsoft',
    university: 'Carnegie Mellon University, IIT Guwahati',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/Priyatham+Bollimpalli.png?auto=format,compress&q=80',
  },
  {
    id: 4,
    name: 'Vamsi Krishna',
    jobType: 'AI & Quantum Computing, Google',
    university: 'Georgia Institute of Technology, IIT Madras',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/vamsi-krishna.png?auto=format,compress&q=80',
  },
]

class MasterClassMentors extends Component {
  render() {
    return (
      <div className="masterclass-section">
        <div className="container masterclass-first-section">
          <div className="masterclass-sub-section-1">
            <h1>
              Masterclasses from <br />
              Mentors in the Community
            </h1>
            <p>
              Get insights directly from people who have been there and done
              that. These masterclasses not only provide directions to reach
              your career goals but also keep you inspired to dream without
              limitations and achieve them.
            </p>
            <img
              src="https://nxtwave.imgix.net/ccbp-website/professional/masterclass-community.png?auto=format,compress&q=80"
              alt="company-logo"
            />
            <br />
            <a
              href="https://forms.ccbp.in/public/form/talk-to-career-expert"
              target="_blank"
              rel="noreferrer"
              className="masterclass-demo-link"
            >
              Request a Callback
            </a>
          </div>
          <div className="main-masterclass">
            <a
              href="https://youtube.com/watch?v=wLOkQDXN8RQ"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/rakesh-misra-yt.png?auto=format,compress&q=80"
                alt="main-masterclass"
              />
              <p>Sneak Peek Of Masterclass by Rakesh Misra</p>
              <p>Co-Founder Uhana (Acquired by VMWare), Stanford, IIT Madras</p>
            </a>
          </div>
        </div>
        <ul className="sub-masterclasses">
          {masterClassMentorsList.map(item => (
            <li>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="mentor-profile"
              />
              <h3>{item.name}</h3>
              <div className="mentor-data-div">
                <img
                  src="https://assets-global.website-files.com/5f06ee1c533d678be6f7f4d5/5f09a19c1293a2282658b7df_work%402x.png"
                  alt="job"
                />
                <p>{item.jobType}</p>
              </div>
              <div className="mentor-data-div">
                <img
                  src="https://assets-global.website-files.com/5f06ee1c533d678be6f7f4d5/5f09a19ca95103abe8d05c3e_edu%402x.png"
                  alt="job"
                />
                <p>{item.university}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MasterClassMentors
