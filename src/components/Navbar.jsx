import { NavLink } from 'react-router-dom'
import { Menu } from 'react-feather'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    toggle === false ? setToggle(true) : setToggle(false)
  }

  return (
    <nav>
      <div className="container navbar">
        <span>AFQ Software</span>
        <ul className={`${toggle === false ? '' : 'show'}`}>
          <li>
            <NavLink exact to={'/'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={'/services'}>Services</NavLink>
          </li>
          <li>
            <NavLink to={'/news'}>News</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact Us</NavLink>
          </li>
        </ul>
        <div className="hamburger" onClick={() => handleToggle()}>
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
