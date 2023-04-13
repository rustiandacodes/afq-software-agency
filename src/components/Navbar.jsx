import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="container navbar">
        <span>AFQ Software</span>
        <ul>
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
      </div>
    </nav>
  )
}

export default Navbar
