import {Component} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const userReviewsList = [
  {
    id: 1,
    imageUrl: '',
    name: 'Sayak Dutta',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Google_logo.png?auto=format,compress&q=80',
    jobType: 'Software Engineer',
    comment:
      'Bite-sized training and mentorship helped me learn advanced skills. It should be introduced to students of all ages.',
  },
  {
    id: 2,
    imageUrl: '',
    name: 'Soumith',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Amazon-3x.png?auto=format,compress&q=80',
    jobType: 'Software Development Engineer(Intern)',
    comment:
      'Starting early at CCBP 4.0 gave me a great edge over my peers in college.',
  },
  {
    id: 3,
    imageUrl: '',
    name: 'Meghna Barnwl',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Flipkart+Logo-2x.png?auto=format,compress&q=80',
    jobType: 'Software Development Engineer(Intern)',
    comment:
      "Here, I've gained command over concepts like never before. It taught me how to approach a problem and then solve it.",
  },
  {
    id: 4,
    imageUrl: '',
    name: 'Ranjith Tevnan',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Hotstar-2x.png?auto=format,compress&q=80',
    jobType: 'Software Engineer(Intern)',
    comment:
      'As the difficulty level of problems in DSA and ML grew, the ecosystem here pushed me out of my comfort zone and helped me learn quickly.',
  },
  {
    id: 5,
    imageUrl: '',
    name: 'Jamma Sathwik',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Amazon-3x.png?auto=format,compress&q=80',
    jobType: 'Secured Internship',
    comment:
      'CCBP 4.0 helped me clear the coding rounds of Amazon, Goldman Sachs, D.E.Shaw, and many top MNCs.',
  },
  {
    id: 6,
    imageUrl: '',
    name: 'Karthikeya',
    company: '',
    companyLogoUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/62f396b90d180f4da613d329_paymatrix_logo_v1_resize.png',
    jobType: 'Full Stack Developer(Intern)',
    comment:
      'I got a tech internship with a stipend right in my 2nd year. Earlier, I feared coding. With CCBP 4.0 Academy, I’m building web apps on my own.',
  },
  {
    id: 7,
    imageUrl: '',
    name: 'Gangasunil Reddy',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Observe.png?auto=format,compress&q=80',
    jobType: 'Software Development Engineer(Intern)',
    comment:
      'With support from my mentor at CCBP 4.0, I overcame mental struggle and improved my thought process.',
  },
  {
    id: 8,
    imageUrl: '',
    name: 'Avichal Gupta',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/JPMorgan-ChaseCo-2x.png?auto=format,compress&q=80',
    jobType: 'Software Engineer(Intern)',
    comment:
      'I would definitely recommend this amazing platform to the juniors. It teaches you the essentials to crack any top tech interview.',
  },
  {
    id: 9,
    imageUrl: '',
    name: 'Mokshith Sai',
    company: '',
    companyLogoUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/62f390761470931be36c42b6_ditto.png',
    jobType: 'Product QA(Intern)',
    comment:
      'I am starting my internship in 2nd year. With CCBP 4.0, I built a strong technical skill set and got a powerful headstart to my career.',
  },
  {
    id: 10,
    imageUrl: '',
    name: 'Anitha Saisadhanala',
    company: '',
    companyLogoUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/623f2efaa9384186286cafc4_My%20Furries.png',
    jobType: 'QE Intern',
    comment:
      "I'm just in my 2nd year and I got an internship with a good stipend. With CCBP 4.0, I’m sure I’ll be in a great position after graduating",
  },
  {
    id: 11,
    imageUrl: '',
    name: 'Bala Subramanyam',
    company: '',
    companyLogoUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/623f2f0b8a2b1658d53144e5_Qualcomm-2.png',
    jobType: 'QA Intern',
    comment:
      'CCBP 4.0 is well structured and helps me get practical experience before graduating. I am sure my future is in safe hands.',
  },
  {
    id: 12,
    imageUrl: '',
    name: 'Sampath Kumar',
    company: '',
    companyLogoUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/623f2f0c3a639866b0dd2187_Qualcomm-3.png',
    jobType: 'Software Developer(Intern)',
    comment:
      "With CCBP 4.0, I am enhancing my skill set at a fast pace. When I started, I didn't know how websites work. Now, I am building web apps on my own.",
  },
  {
    id: 13,
    imageUrl: '',
    name: 'Aniketh Varma',
    company: '',
    companyLogoUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/623f2effec895221fcb99ea2_Qualcomm-1.png?auto=format,compress&q=80',
    jobType: 'Frontend Developer(Intern)',
    comment:
      'With the help of CCBP 4.0, I built 600+ websites on my own till now. With this experience, I got a paid internship in my 2nd year itself.',
  },
  {
    id: 14,
    imageUrl: '',
    name: 'Sk Izajur Rahaman',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Adobe-2x.png?auto=format,compress&q=80',
    jobType: 'Research(Intern)',
    comment:
      'With the structured curriculum in the program, I could learn programming in a short period with thorough practice and crack my internship.',
  },
  {
    id: 15,
    imageUrl: '',
    name: 'Arham Tabish',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Amazon-3x.png?auto=format,compress&q=80',
    jobType: 'Software Development Engineer(Intern)',
    comment:
      'CCBP 4.0 is the best place to kickstart your tech career. I developed strong fundamentals, DSA, and competitive programming skills.',
  },
  {
    id: 16,
    imageUrl: '',
    name: 'Rahul Kumar',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Reliance+Jio+Logo.png?auto=format,compress&q=80',
    jobType: 'Software Developer',
    comment:
      'Learning by building real-world projects improved my skills and problem solving abilities.',
  },
  {
    id: 17,
    imageUrl: '',
    name: 'Siva Shankarmalla',
    company: '',
    companyLogoUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/623f2f06c55a473912912186_KDM.png?auto=format,compress&q=80',
    jobType: 'Software Development(Intern)',
    comment:
      'Trainers help me learn to code with simplified explanations. I bagged an internship in my 2nd year. CCBP 4.0 gave me the roadmap to my dream!',
  },
  {
    id: 18,
    imageUrl: '',
    name: 'Jatin',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Qualcomm-2x.png?auto=format,compress&q=80',
    jobType: 'Software Engineering(Intern)',
    comment:
      'Bite-sized learning modules, interactive slides, quick response from instructors, all-in-all, the ecosystem made me a tech professional.',
  },
  {
    id: 19,
    imageUrl: '',
    name: 'Yashi Agarwal',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Mentor+Grahics.png?auto=format,compress&q=80',
    jobType: 'Software Engineer',
    comment:
      'I only studied for 3-4 hrs a week. But just in a month, I could see a major difference in my skills.',
  },
  {
    id: 20,
    imageUrl: '',
    name: 'Kshitij Raut',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/ZS_Logo_RGB%404x+1.png?auto=format,compress&q=80',
    jobType: 'Decision Analytics Associates',
    comment:
      'CCBP 4.0 platform helped me learn at my own pace. So I could overcome anxiety due to competition.',
  },
  {
    id: 21,
    imageUrl: '',
    name: 'Likith Sai',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/wells-fargo.png?auto=format,compress&q=80',
    jobType: 'Technology Development(Intern)',
    comment:
      'Trainers are really friendly and they explain with real-world examples. It feels like a friend is explaining the concepts to us.',
  },
  {
    id: 22,
    imageUrl: '',
    name: 'Gulshan Mohiddin',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Delhivery-3x.png?auto=format,compress&q=80',
    jobType: 'Associate Process Analyst',
    comment:
      "CCBP 4.0 helped me build a high-paying career in Data Science.It's a one-stop destination to prepare for high-paying tech jobs.",
  },
  {
    id: 23,
    imageUrl: '',
    name: 'Subesh',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Tech+mahindra-3x.png?auto=format,compress&q=80',
    jobType: 'Project Trainee',
    comment:
      'Every day, my confidence grew with the well-structured courses and comprehensive practice sets. I knew that I was on the right path.',
  },
  {
    id: 24,
    imageUrl: '',
    name: 'Anvesh',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Delta-vrobo-2x.png?auto=format,compress&q=80',
    jobType: 'Full Stack Developer',
    comment:
      'Mindset training made me realize the power of consistency and kept me motivated during tough pandemic times.',
  },
  {
    id: 25,
    imageUrl: '',
    name: 'Pranesh',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/TCS.png?auto=format,compress&q=80',
    jobType: 'Systems Engineer',
    comment:
      'I could learn programming easily despite being a civil engineering graduate.',
  },
  {
    id: 26,
    imageUrl: '',
    name: 'Vineet Singla',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Goldman+Sachs+Logo.png?auto=format,compress&q=80',
    jobType: 'Analyst',
    comment:
      'Because of the practice I got on CCBP 4.0, I could clear interviews easily.',
  },
  {
    id: 27,
    imageUrl: '',
    name: 'Shubham Deshmukh',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Optum.png?auto=format,compress&q=80',
    jobType: 'Software Engineer',
    comment:
      'Because of simplified teaching by CCBP trainers, I could understand concepts clearly and gain in-depth knowledge.',
  },
]

// {
//     id: 1,
//     imageUrl: '',
//     name: 'Sayak Dutta',
//     company: '',
//     companyLogoUrl:
//       'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Google_logo.png?auto=format,compress&q=80',
//     jobType: 'Software Engineer',
//     comment:
//       'Bite-sized training and mentorship helped me learn advanced skills. It should be introduced to students of all ages.',
//   },

class UserReviews extends Component {
  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  renderReview = () => (
    <div className="render-review-div">
      <div className="first-review-div">
        <img
          src="https://assets-global.website-files.com/6170ed8e3c70e970603ed980/6176c3122d34b07b0e02301d_left-quote%201.svg"
          alt="quote-img"
          className="quote-img"
        />
        <h1 className="review">
          Bite-sized training and mentorship helped me learn advanced skills. It
          should be introduced to students of all ages.
        </h1>
      </div>
      <div className="review-user">
        <div>
          <h4>Sayak Dutta</h4>
          <p>Software Engineer</p>
        </div>
        <img
          src="https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/623f2effec895221fcb99ea2_Qualcomm-1.png?auto=format,compress&q=80"
          alt="company-logo"
          className="company-img"
        />
      </div>
    </div>
  )

  render() {
    return (
      <>
        <div className="user-reviews-section">
          <div className="slider-section">
            <Slider {...this.settings}>
              {userReviewsList.map(item => (
                <img
                  src="https://nxtwave.imgix.net/ccbp-website/Home/Master-classes/vamsi-krishna.png?auto=format,compress&q=80"
                  alt={item.name}
                  className="sliding-pic"
                />
              ))}
            </Slider>
          </div>
        </div>
      </>
    )
  }
}

export default UserReviews
