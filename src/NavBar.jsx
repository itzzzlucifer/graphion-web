import reactLogo from './assets/react.svg';
import GraphionLogo from './assets/Graphion_logo.png';

const NavBar = () => {
    return (
      <nav className="navbar">
          <ul className="nav-container-left">
              <li className="nav-text"><a href="#about">About Us</a></li>
              <li className="nav-text"><a href="#services">Services</a></li>
              <li className="nav-text"><a href="#pricing">Pricing</a></li>
          </ul>
          <div className="logo"><img src={GraphionLogo} alt="Graphion_logo" /></div>
          <div className="nav-container-right"><button className="cta-button"><a href="#contact">Contact Now</a></button></div>
          {/*
          <div className='collapsible-nav'>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contacts</li>
          </div>
          */}
      </nav>
    );
  };
  

  export default NavBar;
  