import { ArrowRight } from 'react-feather'
import ilustrationVr from '../assets/VR Array 1.svg'
import ilustrationLineChart from '../assets/Line Chart 1.svg'
import ilustrationClock from '../assets/clock 1.svg'
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
    </div>
  )
}
export default Home
