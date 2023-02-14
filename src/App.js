import {Component} from 'react'
// import {BrowserRouter} from 'react-router-dom'
import Header from './Components/Header'
import IntensiveBanner from './Components/IntensiveBanner'
import FirstSection from './Components/FirstSection'
import SecondSection from './Components/SecondSection'
import AllCompanies from './Components/FourthSection'
import AwardsSection from './Components/FifthSection'
import MentorsSection from './Components/SixthSection'
import UserReviews from './Components/SeventhSection'
// import YoutubeReviews from './Components/EightSection'
import FeaturedSection from './Components/NinthSection'
import MasterClassMentors from './Components/TenthSection'
import InvestorsData from './Components/EleventhSection'
import MediaSection from './Components/TwelthSection'
import FooterSection from './Components/ThirteenthSection'
import PolicySection from './Components/FourteenthSection'
import WhatsAppButton from './Components/FifteenthSection'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <IntensiveBanner />
        <FirstSection />
        <SecondSection />
        <AllCompanies />
        <AwardsSection />
        <MentorsSection />
        <UserReviews />
        {/* <YoutubeReviews /> */}
        <FeaturedSection />
        <MasterClassMentors />
        <InvestorsData />
        <MediaSection />
        <FooterSection />
        <PolicySection />
        <WhatsAppButton />
      </>
    )
  }
}

export default App
