import {Component} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const userReviewsList = [
  {
    id: 1,
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/618b5be656edd84f4b7562e5_Anvesh.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/617be58b4a5a030025472358_Soumith.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/6193c6bbe02c1535d7695925_MEGHNA%20BARNWAL.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/6193c6bc92a79b77c2033e5d_Ranjith%20Tevnan.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/617be58b4a5a03a879472370_Jamma%20Sathwik%202x.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/623f0179eb9b32402faf86bd_Jatin.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/617d219ff3cfc11e55785fbe_Ganga%20Sunil.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/6193c6b464b7ed22320e6ed3_Avichal%20Gupta.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/623f017eb3c798baebcf1042_Jatin-5.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/623f017e632baac39c4f429a_Jatin-7.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/623f017e04df013d320e5ac1_Jatin-6.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/623f0179c92e92adf49d4d08_Jatin-1.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/6193c6be64b7ed1b0f0e6f12_Sk%20Izajur%20Rahaman.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/6193c6b279a9348792d1ac6c_Arham%20Tabish.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/617be58b4a5a03204d472376_Rahul%20Kumar%202x.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/623f017ec92e9225009d4d5c_Jatin-4.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/6193c6b7c9880a8ea83879da_Jatin.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/617be58b4a5a03374347237a_Yashi%20Agarwal%202x.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/617be58b4a5a0366fe472372_Kshitij%20Raut%202x.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/617be58b4a5a03f657472378_Likith%20Sai%202x.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/6193c6b6e6bb677838b91e62_Gulshan%20Mohiddin%20Shaik.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/6193c6af72d3730d27e56a41_Subesh.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/617be58b4a5a033d1d472374_Anvesh%202x.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/617be58b4a5a034899472368_Pranesh%202x.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/617be58b4a5a034a3c47236e_Vineet%20Singla%202x.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/6193c6b8b2998204dc051c36_Manoj%20Kumar.png',
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
    imageUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/6193c6af11fc5c7ef640216e_Aditya%20Lodhi.png',
    name: 'Shubham Deshmukh',
    company: '',
    companyLogoUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/one-line-testimonials/Optum.png?auto=format,compress&q=80',
    jobType: 'Software Engineer',
    comment:
      'Because of simplified teaching by CCBP trainers, I could understand concepts clearly and gain in-depth knowledge.',
  },
]

class UserReviews extends Component {
  settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7500,
    autoplaySpeed: 0,
    fade: false,
    cssEase: 'linear',
    appendDots: dots => (
      <div
        style={{
          padding: '10px',
          marginTop: '-100px',
        }}
      >
        <ul className="dot-style" style={{marginBottom: '-50px'}}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '40px',
          height: '40px',
          color: '#183b56',
          fontSize: '20px',
          backgroundImage: `url(${userReviewsList[i].imageUrl})`,
          backgroundSize: 'cover',
        }}
      >
        {}
      </div>
    ),
  }

  renderReview = item => (
    <div id="reviews" className="render-review-div">
      <div className="first-review-div">
        <img
          src="https://assets-global.website-files.com/6170ed8e3c70e970603ed980/6176c3122d34b07b0e02301d_left-quote%201.svg"
          alt="quote-img"
          className="quote-img"
        />
        <h1 className="review">{item.comment}</h1>
      </div>
      <div className="review-user">
        <div>
          <h4>{item.name}</h4>
          <p>{item.company}</p>
        </div>
        <img
          src={item.companyLogoUrl}
          alt="company-logo"
          className="company-img"
        />
      </div>
    </div>
  )

  render() {
    return (
      <div className="user-reviews-slider-container">
        <div className="slider-container">
          <Slider {...this.settings}>
            {userReviewsList.map(item => (
              <div>{this.renderReview(item)}</div>
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}

export default UserReviews
