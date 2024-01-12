import PropTypes from "prop-types";
import styles from "./header.module.css";
import { Navbar } from 'react-bootstrap'; // Import Bootstrap components
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return(
        <div className={styles.header}>
          <Navbar fixed="top" bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#home" className="ml-0">
                <img
                    alt=""
                    src="/img/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Kerala Thattukada
              </Navbar.Brand>
                <Nav>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#menu">Menu</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>  
          </Navbar>
      </div>
  );
};

Header.propTypes = {};