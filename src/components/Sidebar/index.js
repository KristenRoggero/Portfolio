import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/3.png'
import LogoSubtitle from '../../assets/images/FullName.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Kristen" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4E4C67" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4E4C67" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4E4C67" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4E4C67" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#4E4C67"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/kristen-roggero-55b5b519a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4E4C67"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kristenroggero"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4E4C67"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCb-SQv7sPjV78ZS3UYwuB9g"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4E4C67"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#4E4C67"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
