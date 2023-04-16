import { ArrowRight } from 'react-feather'
import ilustrationVr from '../assets/VR Array 1.svg'
import ilustrationLineChart from '../assets/Line Chart 1.svg'
import ilustrationClock from '../assets/clock 1.svg'
import ilustrationWebApplication from '../assets/web-application.svg'
import ilustrationGameDev from '../assets/game-development.svg'
import ilustrationSeo from '../assets/SEO.svg'
import ilustrationIot from '../assets/iot.svg'
import ilustrationBigData from '../assets/big-data.svg'
import ilustrationCyberSecurity from '../assets/cyber-security.svg'
import ilustrationMobileApp from '../assets/mobile-app.svg'
import ilustrationDigitalMarketing from '../assets/digital-marketing.svg'
import ilustrationDashed1 from '../assets/Vector 1.png'
import ilustrationDashed2 from '../assets/Vector 2.png'
import ilustrationDashed3 from '../assets/Vector 3.png'
import ilustrationSucclent from '../assets/Succlent angle 1.png'
import ilustrationBell from '../assets/Bell Angle 1.png'
const Home = () => {
  return (
    <div id="home">
      {/* start hero section */}
      <section id="hero" className="hero-padding">
        <div className="container">
          <h1 className="hero-title">
            Advanced software, advanced research for <span>SIMPLE</span> life
          </h1>
          <p className="paragraph-1">
            We harness the latest technologies to develop cutting-edge digital
            solutions for modern business requirements
          </p>
          <div className="hero-btn">
            <span>Lets Get Started</span>
            <div className="feather-arrow-left">
              <ArrowRight size={25} />
            </div>
          </div>
        </div>
      </section>
      {/* end hero section */}

      {/* start about afq */}
      <section id="about-afq">
        <div className="container section-padding">
          <div className="title">
            <h2 className="header-1">
              About <span>AFQ</span>
            </h2>
            <p className="paragraph-2">
              At AFQ Tech, we believe in a systematic approach for any project
              be it complex or simple. We are a group of individuals with a
              various set of skill set varies from Digital Marketing to
              IoT/Robotics solutions. We have our dedicated team for your
              project which uses various methods such as agile Scrum & agile
              Kanban. We ensure top-notch quality, on-time delivery, and agility
              for your project.
            </p>
          </div>
          <div className="content">
            <div className="card">
              <img src={ilustrationVr} alt="ilustration" />
              <h3 className="header-2">Cutting Edge Technology</h3>
              <p className="paragraph-2">
                Take the advantage of our cutting-edge solutions to increase
                your Return of Investment on IT.
              </p>
            </div>
            <div className="card">
              <img src={ilustrationLineChart} alt="ilustration" />
              <h3 className="header-2">Cross Device Compatibility</h3>
              <p className="paragraph-2">
                Multi-device compatibility ensures that creating, viewing and
                providing quick and easy
              </p>
            </div>
            <div className="card">
              <img src={ilustrationClock} alt="ilustration" />
              <h3 className="header-2">Tailer Mode Development</h3>
              <p className="paragraph-2">
                Scalable and dynamic systems with the ever-changing trends to
                meet your dynamic business needs
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end about afq */}

      {/* start what we do */}
      <section id="what-we-do">
        <div className="container section-padding">
          <h2 className="header-1">What We Do</h2>
          <div className="content">
            <div className="card">
              <img src={ilustrationWebApplication} alt="ilustration" />
              <h2 className="header-2">Web Application</h2>
              <p className="paragraph-2">
                Platform independant business solutions for maximum availability
              </p>
            </div>
            <div className="card">
              <img src={ilustrationGameDev} alt="ilustration" />
              <h2 className="header-2">Game Development</h2>
              <p className="paragraph-2">
                Interactive games with perfect graphics
              </p>
            </div>
            <div className="card">
              <img src={ilustrationSeo} alt="ilustration" />
              <h2 className="header-2">SEO</h2>
              <p className="paragraph-2">
                Let the world find you on top of others
              </p>
            </div>
            <div className="card">
              <img src={ilustrationIot} alt="ilustration" />
              <h2 className="header-2">Iot/ AI/ RObotic</h2>
              <p className="paragraph-2">
                Advanced autonomous technologies to make life simple
              </p>
            </div>
            <div className="card">
              <img src={ilustrationBigData} alt="ilustration" />
              <h2 className="header-2">BIG Data</h2>
              <p className="paragraph-2">
                Get your decision making backed by inteligent insight
              </p>
            </div>
            <div className="card">
              <img src={ilustrationCyberSecurity} alt="ilustration" />
              <h2 className="header-2">Cyber Security</h2>
              <p className="paragraph-2">
                Make your digital assets secure and protected
              </p>
            </div>
            <div className="card">
              <img src={ilustrationMobileApp} alt="ilustration" />
              <h2 className="header-2">Mobile Applications</h2>
              <p className="paragraph-2">
                The simplest but robust technology to accompany with you
              </p>
            </div>
            <div className="card">
              <img src={ilustrationDigitalMarketing} alt="ilustration" />
              <h2 className="header-2">Digital Marketing</h2>
              <p className="paragraph-2">
                Business made easy in a digital world
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end what we do */}

      <section id="achievement">
        <img className="dashed-1" src={ilustrationDashed1} alt="ilustration" />
        <img className="dashed-2" src={ilustrationDashed2} alt="ilustration" />
        <img className="succlent" src={ilustrationSucclent} alt="ilustration" />
        <img className="dashed-3" src={ilustrationDashed3} alt="ilustration" />
        <img className="bell" src={ilustrationBell} alt="ilustration" />
        <div className="container achieve-main section-padding">
          <div className="title">
            <h1>6</h1>
            <p className="paragraph-2">Happy Clients</p>
          </div>
          <div className="title">
            <h1>11</h1>
            <p className="paragraph-2">Completed Projects</p>
          </div>
          <div className="title">
            <h1>7M</h1>
            <p className="paragraph-2">Transsactions</p>
          </div>
          <div className="title">
            <h1>600+</h1>
            <p className="paragraph-2">Customers</p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home
