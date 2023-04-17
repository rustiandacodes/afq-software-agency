import { Search } from 'react-feather'
import instagram from '../assets/instagram.svg'
import dribble from '../assets/dribbble.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
const Footer = () => {
  return (
    <footer>
      <div className="container section-padding">
        <div className="keyword">
          <h4 className="header-2">Key Word</h4>
          <ul>
            <li className="paragraph-2">Lorem</li>
            <li className="paragraph-2">Lorem ipsum</li>
            <li className="paragraph-2">Lorem</li>
            <li className="paragraph-2">Lorem ipsum</li>
            <li className="paragraph-2">Lorem</li>
            <li className="paragraph-2">Lorem ipsum</li>
            <li className="paragraph-2">Lorem</li>
            <li className="paragraph-2">Lorem ipsum</li>
            <li className="paragraph-2">Lorem</li>
            <li className="paragraph-2">Lorem ipsum</li>
          </ul>
        </div>
        <hr />
        <div className="search-container">
          <div className="search">
            <h3 className="header-2">Lorem ipsum dolor</h3>
            <div className="input-field">
              <input type="text" />
              <div className="icon">
                <Search />
              </div>
            </div>
          </div>
          <div className="title">
            <h3 className="header-2">Lorem, ipsum dolor</h3>
            <p className="paragraph-2">Go to our official Announcements</p>
          </div>
        </div>
        <hr />
        <div className="container-text">
          <div className="title">
            <h3 className="header-2">Lorem, ipsum dolor</h3>
            <p className="paragraph-2">Go to DID requirements</p>
          </div>
          <div className="title-2">
            <h3 className="header-2">Lorem, ipsum dolor</h3>
            <p className="paragraph-2">To the knowledgebase</p>
          </div>
        </div>
        <div className="socials-media">
          <div className="social-container">
            <img src={instagram} alt="socials" />
          </div>
          <div className="social-container">
            <img src={dribble} alt="socials" />
          </div>
          <div className="social-container">
            <img src={twitter} alt="socials" />
          </div>
          <div className="social-container">
            <img src={youtube} alt="socials" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
