import {Component} from 'react'
// import {BrowserRouter} from 'react-router-dom'
import Header from './Components/Header'
import IntensiveBanner from './Components/IntensiveBanner'
import FirstSection from './Components/FirstSection'
import SecondSection from './Components/SecondSection'
import AllCompanies from './Components/FourthSection'
import AwardsSection from './Components/FifthSection'
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
      </>
    )
  }
}

export default App
