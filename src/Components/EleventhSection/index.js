import {Component} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const investorsData = [
  {
    id: 1,
    name: 'Rehan Yar Khan',
    company: 'Managing Partner, Orios',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/Rehan+Yar+Khan.png?auto=format,compress&q=80',
  },
  {
    id: 2,
    name: 'Anup Jain',
    company: 'Managing Partner, Orios',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/anup-jain.png?auto=format,compress&q=80',
  },
  {
    id: 3,
    name: 'Rajeev Suri',
    company: 'Managing Partner, Orios',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/rajeev+suri.png?auto=format,compress&q=80',
  },

  {
    id: 4,
    name: 'Vineet Bhansali',
    company: 'Vice President, Orios',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/vinit-bhansali.png?auto=format,compress&q=80',
  },
  {
    id: 5,
    name: 'Vaibhav Domkundwar',
    company: 'Founder & CEO, Better Capital',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/Vaibhav+Domkundwar.png?auto=format,compress&q=80',
  },
  {
    id: 6,
    name: 'Vikram Kailas',
    company: 'Cofounder, Mytrah Energy',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/Vikram-Kailas.png?auto=format,compress&q=80',
  },
  {
    id: 7,
    name: 'Umang Kumar',
    company: 'Cofounder & President, CarDekho',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/Umang.png?auto=format,compress&q=80',
  },
  {
    id: 8,
    name: 'Ravi Bhushan',
    company: 'Founder & CEO, BrightChamps',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/Ravi+Bhusan.png?auto=format,compress&q=80',
  },
  {
    id: 9,
    name: 'Nandu Nandkishore',
    company: 'Professor ISB & Former Global CEO Nestle Nutrition',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/Nandkishore.png?auto=format,compress&q=80',
  },
  {
    id: 10,
    name: 'Anupam Mittal',
    company: 'Founder, Shaadi.com',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/anupam_mittal.png?auto=format,compress&q=80',
  },
  {
    id: 11,
    name: 'Ramakanth Sharma',
    company: 'Founder & COO, LivSpace',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/Ramakanth+Sharma.png?auto=format,compress&q=80',
  },
  {
    id: 12,
    name: 'Chakradhar Gade',
    company: 'Cofounder, Country Delight',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/chakradhar+gade.png?auto=format,compress&q=80',
  },
  {
    id: 13,
    name: 'Vikas Malpani',
    company: 'Cofounder of CommonFloor, Leher App',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/Vikas+Malpani.png?auto=format,compress&q=80',
  },
  {
    id: 14,
    name: 'Rajesh Sawhney',
    company: 'Founder, GSF Accelerator',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/Rajesh+Sawhney.png?auto=format,compress&q=80',
  },
  {
    id: 15,
    name: 'Shajikumar Devakar',
    company: 'Executive Director, IIFL Wealth',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/Shajikumar+Devakar.png?auto=format,compress&q=80',
  },
  {
    id: 16,
    name: 'Giridhar Malpani',
    company: 'Founder, Climber Capital',
    imageUrl:
      'https://nxtwave.imgix.net/ccbp-website/Home/investors/Giridhar+Malpani.png?auto=format,compress&q=80',
  },
]

class InvestorsData extends Component {
  settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '30px',
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    autoPlay: true,
    swipeToSlide: true,
    slidesPerRow: 1,
    dots: true,
  }

  render() {
    return (
      <div className="investors-section">
        <div className="investors-top-section">
          <p>Announcing Our Pre-Series A Funding</p>
          <h1>New Partners in Our Journey</h1>
          <div className="investing-companies-div">
            <img
              src="https://assets-global.website-files.com/615d6c87832c4ac10f88ffa7/61976f920f41f80da2d29a0c_Frame%20445.png"
              alt="orios"
            />
            <img
              src="https://assets-global.website-files.com/615d6c87832c4ac10f88ffa7/61976f92af5a21287fd691a8_Frame%207166.png"
              alt="better"
            />
          </div>
        </div>
        <div className="investors-image-section">
          <Slider {...this.settings} className="i">
            {investorsData.map(item => (
              <div className="investor">
                <img src={item.imageUrl} alt={item.name} />
                <p className="investor-name">{item.name}</p>
                <p className="investor-company">{item.company}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}

export default InvestorsData
