import {Component} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const youtubeVideoReviews = [
  {
    id: 1,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/Yaswanth-reddy-video-testimonial.svg?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/uXCR6kwje8Q',
    content:
      'Had I known CCBP post Intermediate, I would be way ahead in my career',
  },
  {
    id: 2,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/sriram_giridar_video_testimonial.svg?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/C_dReIMRE6U',
    content:
      'If not for CCBP, I would have taken at least 3 years to get this level job',
  },
  {
    id: 3,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/rayvalesh_video_testimonial.svg?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/qMlZhQHBngc',
    content:
      'With CCBP I got 3 full-time job offers and 2 freelancing opportunities',
  },
  {
    id: 4,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/sushanth_video_testimonial.png?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/qtO7qkxG7lI',
    content: 'Civil Engineer to a Full Stack Developer in 4 months',
  },
  {
    id: 5,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/bharath_chandra_video_testimonials.png?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/H5fdHXL0cLA',
    content: '15 Backlogs to a Software Engineer',
  },
  {
    id: 6,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/Bhavya_video_testimonial.svg?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/f61J08YFCFc',
    content: '6 Year Career Gap to a Software Engineer',
  },
  {
    id: 7,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/Gokulanadh_video_testimonial.svg?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/Xyskv0Shf0A',
    content: 'Most difficult topics are taught in very easiest way',
  },
  {
    id: 8,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/sushma_video_testimonial.svg?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/I7X6IWQIDNc',
    content:
      'Strong focus on fundamentals made it easy to learn advanced concepts',
  },
  {
    id: 9,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/anad_kumar_video_testimonial.svg?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/sc53KuAR-sE',
    content: 'Mock tests helped me to crack interviews easily',
  },
  {
    id: 10,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/tulasi_video_testimonial.svg?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/6mltkGyx6Kk',
    content: 'B.Sc 3rd year student to a IT Professional',
  },
  {
    id: 11,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/satyam_video_testimonial.png?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/fgLysRBSOhA',
    content: 'A non-tech guy from Madhya Pradesh to a Data Engineer Trainee',
  },
  {
    id: 12,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/Raghu-c-video-testimonial.png?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/I7Ly3n30QIo',
    content: 'From zero coding knowledge to a full-stack developer',
  },
  {
    id: 13,
    thumbnailUrl:
      'https://nxtwave.imgix.net/ccbp-website/intensive/video-testimonials/sathish_video_testimonial.png?auto=format,compress&q=80',
    videoUrl: 'https://youtu.be/ToFT6nOZYrg',
    content: 'From a BPO Job to a Successful Tech Professional',
  },
]

class YoutubeReviews extends Component {
  settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 4000,
    // cssEase: 'linear',
  }

  render() {
    return (
      <div className="youtube-reviews-section">
        <h1>Hear ab0ut CCBP 4.0 learner&apos;s experience</h1>
        <div className="slider-container">
          <Slider {...this.settings}>
            {youtubeVideoReviews.map(item => (
              <a
                href={item.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="youtube-thumbnail"
                height="250"
                width="360"
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.id}
                  height="250"
                  width="360"
                  className="thumbnail-img"
                />
                <p>{item.content}</p>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}

export default YoutubeReviews
