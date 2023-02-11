import {Component} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const newsList = [
  {
    id: 1,
    websiteUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/61bc38921b5d651f8c0f5e25_Frame%20492%20(1).png',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles/Photo.png?auto=format,compress&q=80',
    heading: 'Edtech startup NxtWave raises $2.8 million from Orios, Better...',
    articleLink:
      'https://economictimes.indiatimes.com/tech/funding/edtech-startup-nxtwave-raises-2-8-million-from-orios-better-capital/articleshow/88024791.cms',
    date: '01 Dec 2021',
  },
  {
    id: 2,
    websiteUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/61bc38921b5d65031b0f5e10_Frame%20491%20(5).png',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles/image3.png?auto=format,compress&q=80',
    heading: 'NxtWave raises $2.8m in pre-Series A',
    articleLink:
      'https://timesofindia.indiatimes.com/business/india-business/nxtwave-raises-2-8m-in-pre-series-a/articleshow/88037853.cms',
    date: '02 Dec 2021',
  },
  {
    id: 3,
    websiteUrl:
      'https://assets-global.website-files.com/615d6d29523685a223ee6e4c/61b3440d8ed9820d3b0c4adc_Frame%20478%20(3).png',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles/image+(6).png?auto=format,compress&q=80',
    heading:
      'NxtWave raises $2.8M in pre-Series A round led by Orios Venture ...',
    articleLink:
      'https://yourstory.com/2021/12/edtech-startup-helping-students-learn-tech-skills-vernacular-content/amp',
    date: '27 Dec 2021',
  },
  {
    id: 4,
    websiteUrl:
      'https://assets-global.website-files.com/615d6d29523685a223ee6e4c/61b3440c8ed98236550c4aad_Frame%20481%20(4).png',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles/pic.png?auto=format,compress&q=80',
    heading: 'Edtech Startup NxtWave Raises Funds To Train Students For...',
    articleLink:
      'https://inc42.com/buzz/nxtwave-raises-funds-to-train-students-for-industry-4-0-careers/amp/',
    date: '01 Dec 2021',
  },
  {
    id: 5,
    websiteUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles/Business-line.png?auto=format,compress&q=80',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles//image2.png?auto=format,compress&q=80',
    heading: 'EdTech startup NxtWave raises $2.8 m in Pre-Series A',
    articleLink:
      'https://www.thehindubusinessline.com/news/education/edtech-startup-nxtwave-raises-28-m-in-pre-series-a/article37782757.ece',
    date: '01 Dec 2021',
  },
  {
    id: 6,
    websiteUrl:
      'https://assets-global.website-files.com/615d6d29523685a223ee6e4c/61b3440c8ed982440d0c4ab7_Frame%20480%20(6).png',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles/your-story-image.png?auto=format,compress&q=80',
    heading:
      'EdTech startup NxtWave raises $2.8 mn pre-Series A funding | VCCircle',
    articleLink:
      'https://flipboard.com/article/edtech-startup-nxtwave-raises-2-8-mn-pre-series-a-funding-vccircle/a-kKlGsFLVSmS6K2NpoPgY0w%3Aa%3A160366280-8b4d08ebd9%2Fvccircle.com',
    date: '02 Dec 2021',
  },
  {
    id: 7,
    websiteUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/61bc38921b5d6547d60f5e0c_Frame%20492.png',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles/image1.png?auto=format,compress&q=80',
    heading: 'EdTech startup NxtWave raises $2.8 m in Pre-Series A',
    articleLink:
      'https://timesnowbusiness.com/edtech-startup-nxtwave-raises-2-8-m-in-pre-series-a/',
    date: '01 Dec 2021',
  },
  {
    id: 8,
    websiteUrl:
      'https://assets-global.website-files.com/615d6d29523685a223ee6e4c/61b3440c8ed98263630c4ad3_Frame%20483%20(3).png',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles/BW-image.png?auto=format,compress&q=80',
    heading: 'Edtech Startup NxtWave Raises $2.8M Pre-Series A Funding',
    articleLink:
      'http://bwdisrupt.businessworld.in/article/Edtech-Startup-NxtWave-Raises-2-8M-Pre-Series-A-Funding/01-12-2021-413400/',
    date: '01 Dec 2021',
  },
  {
    id: 9,
    websiteUrl:
      'https://assets-global.website-files.com/5fa61cbbf0d432b3230f62b1/61bc38921b5d65a51b0f5e1d_Frame%20482%20(4).png',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles/Entracker-image.png?auto=format,compress&q=80',
    heading: 'NxtWave raises $2.8 Mn in pre-Series A round',
    articleLink:
      'https://entrackr.com/2021/12/nxtwave-raises-2-8-mn-in-pre-series-a-round/',
    date: '01 Dec 2021',
  },
  {
    id: 10,
    websiteUrl:
      'https://assets-global.website-files.com/615d6d29523685a223ee6e4c/61b3440c8ed982a5210c4ad8_Frame%20480%20(7).png',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles/telengana-image.png?auto=format,compress&q=80',
    heading: 'Hyderabad-based startup raises Rs 20 crore in funding',
    articleLink:
      'https://telanganatoday.com/hyderabad-based-startup-raises-rs-20-crore-in-funding',
    date: '03 Dec 2021',
  },
  {
    id: 11,
    websiteUrl:
      'https://assets-global.website-files.com/615d6d29523685a223ee6e4c/61b3440c8ed9822e4b0c4ace_Frame%20481%20(3).png',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles/Fresspress-image.png?auto=format,compress&q=80',
    heading:
      'Hyderabad-based Edtech startup NxtWave raises $2.8 million from...',
    articleLink:
      'https://www.freepressjournal.in/business/hyderabad-based-edtech-startup-nxtwave-raises-28-million-from-orios-venture-partners-and-better-capital',
    date: '01 Dec 2021',
  },
  {
    id: 12,
    websiteUrl:
      'https://assets-global.website-files.com/615d6d29523685a223ee6e4c/61b3440c8ed9825e980c4ab3_Frame%20482%20(2).png',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/articles/iQ-image.png?auto=format,compress&q=80',
    heading:
      'Edtech startup NxtWave raises $2.8 million from Orion, Better Capital',
    articleLink:
      'https://www.iqstockmarket.com/n/edtech-startup-nxtwave-raises-million-orion-capital-3058041/',
    date: '01 Dec 2021',
  },
]

class MediaSection extends Component {
  settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '30px',
    slidesToShow: 3,
    speed: 500,
    swipeToSlide: true,
    slidesPerRow: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="container media-section">
            <h1 className="h">
              NxtWave<sup>TM</sup> in the Media
            </h1>
            <div className="media-card-section">
              <Slider {...this.settings} className="media-slider">
                {newsList.map(item => (
                  <div className="media-card container">
                    <div className="card-sub-div-2">
                      <img src={item.websiteUrl} alt="media-logo" />
                      <p>{item.date}</p>
                    </div>
                    <img
                      src={item.imageUrl}
                      alt={item.heading}
                      className="media-img"
                    />
                    <h4>{item.heading}</h4>
                    <div className="card-link-div">
                      <a
                        href={item.articleLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read Article
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MediaSection
