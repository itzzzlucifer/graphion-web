import reactLogo from './assets/react.svg';
import CollapsibleSidebar from './utils/CollapsibleSidebar';

const NavBar = () => {
    return (
      <nav className="navbar">
          <ul className="nav-container-left">
              <li className="nav-text"><a href="#about">About Us</a></li>
              <li className="nav-text"><a href="#services">Services</a></li>
              <li className="nav-text"><a href="#pricing">Pricing</a></li>
          </ul>
          <div className="logo"><img src="./src/assets/Graphion logo.png" alt="Graphion_logo" /></div>
          <div className="nav-container-right"><button className="cta-button"><a href="#contact">Contact Now</a></button></div>
      </nav>
    );
  };
  

  export default NavBar;
  