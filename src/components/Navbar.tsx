/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FC} from "react";

import HomeIcon from '../images/menu-icons/home.svg';
import ToolsIcon from '../images/menu-icons/tools.svg';
import UserIcon from '../images/menu-icons/user.svg';
import PortfolioIcon from '../images/menu-icons/portfolio.svg';
//import LetterIcon from '../images/menu-icons/letter.svg';
import GithubIcon from '../images/menu-icons/github.svg';
//import LinkedinIcon from '../images/menu-icons/linkedin.svg';
//import FacebookIcon from '../images/menu-icons/facebook.svg';
//import InstagramIcon from '../images/menu-icons/instagram.svg';

const Navbar:FC = () => {
  const navbar: any = React.useRef(null)

  const [isNavbarActive, setNavbarActive] = React.useState(false)
  const toggleNavbar = () => {
    setNavbarActive((prev) => !prev)
  }

  return (
    <nav ref={navbar} className={isNavbarActive ? "main-menu main-menu--active" : "main-menu"}>
      <div onClick={toggleNavbar} className="main-menu_burger">
        <span></span>
      </div>
      <div onClick={() => setNavbarActive(false)} className="main-menu_burger-background"></div>
      <div className="main-menu_top">
        <a className="logo" href="/">
          <div className="main-menu_top_img"></div>
        </a>
      </div>
      <div className="main-menu_navigation">
        <a href="#home" data-name="home" className="main-menu_navigation_item">
          <img src={HomeIcon} />
          <p>Home</p>
        </a>
        <a href="#about" data-name="about" className="main-menu_navigation_item">
          <img src={UserIcon} />
          <p>About</p>
        </a>
        <a href="#skills" data-name="skills" className="main-menu_navigation_item">
          <img src={ToolsIcon} />
          <p>Skills</p>
        </a>
        <a href="#portfolio" data-name="work" className="main-menu_navigation_item">
          <img src={PortfolioIcon} />
          <p>Work</p>
        </a>
        {/* <a href="#contact" data-name="contact" className="main-menu_navigation_item">
          <img src={LetterIcon} />
          <p>Contact</p>
        </a> */}
      </div>
      <div className="main-menu_links">
        <div className="main-menu_links_item">
          <a href="https://github.com/arseniypom" target="_blank" rel="noreferrer">
            <div className="hexagon github-link">
              <img src={GithubIcon} />
            </div>
            <p>GitHub</p>
          </a>
        </div>
        {/* <div className="main-menu_links_item">
          <a href="https://www.instagram.com/pomazkov.js/" target="_blank" rel="noreferrer">
            <div className="hexagon instagram-link">
              <img src={InstagramIcon} />
            </div>
            <p>Facebook</p>
          </a>
        </div> */}
        {/* <div className="main-menu_links_item">
          <a href="https://www.linkedin.com/in/arseniy-pomazkov/" target="_blank" rel="noreferrer">
            <div className="hexagon linkedin-link">
              <img src={LinkedinIcon}  />
            </div>
            <p>LinkedIn</p>
          </a>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar;
