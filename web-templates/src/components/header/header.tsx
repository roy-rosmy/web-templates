import PropTypes from "prop-types";
import styles from "./header.module.css";
import { Navbar } from 'react-bootstrap'; // Import Bootstrap components
import Nav from 'react-bootstrap/Nav';

interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return(
        <div className={styles.header}>
          <Navbar>
            <Navbar.Brand href="#home">Kerala Thattukada</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#menu">Menu</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="navbar-landing">
            <div className="landing-bar landing-white landing-padding landing-card">
            <a href="#home" className="landing-bar-item landing-button">Kerala Thattukada</a>
            <div className="landing-right landing-hide-small">
              <a href="#about" className="landing-bar-item landing-button">About</a>
              <a href="#menu" className="landing-bar-item landing-button">Menu</a>
              <a href="#contact" className="landing-bar-item landing-button">Contact</a>
            </div>
          </div>
        </div>
      </div>
  );
};

Header.propTypes = {};