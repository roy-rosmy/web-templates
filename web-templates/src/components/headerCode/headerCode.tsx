import PropTypes from "prop-types";
import styles from "./headerCode.module.css";
import { Button, Card, Col, Container, Form, FormControl, Nav, Navbar, Row } from "react-bootstrap";

interface HeaderCodeProps {}

export const HeaderCode: React.FunctionComponent<HeaderCodeProps> = (props) => {
  return (
    <div className={styles["header-code"]}>
      <Container fluid className="mt-3 align-items-start">
        <Row>
          <Col>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#home" className="ml-0">
                <img
                    alt=""
                    src="/img/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                WebSite
              </Navbar.Brand>
                <Nav>
                  <Form>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  </Form>
                  <Nav.Link href="#about" className={styles.navLinkCustom}>About</Nav.Link>
                  <Nav.Link href="#menu" className={styles.navLinkCustom}>Menu</Nav.Link>
                  <Nav.Link href="#contact" className={styles.navLinkCustom}>Contact</Nav.Link>
                </Nav>
            </Container>  
          </Navbar>
          </Col>
        </Row>  
      </Container>
    </div>
  );  
};

HeaderCode.propTypes = {};