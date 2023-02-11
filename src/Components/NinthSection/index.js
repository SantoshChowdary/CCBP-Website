import './index.css'

const FeaturedSection = () => (
  <div className="container">
    <div className="row">
      <div className="featured-section">
        <p>FEATURED IN</p>
        <img
          src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/as-seen-in/featured-in-section-desktop.png"
          alt="featured in"
        />
        <a
          href="https://forms.ccbp.in/public/form/talk-to-career-expert"
          target="_blank"
          rel="noreferrer"
          className="featured-demo-link"
        >
          Request a Callback
        </a>
      </div>
    </div>
  </div>
)

export default FeaturedSection
