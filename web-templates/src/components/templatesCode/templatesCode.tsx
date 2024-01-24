import PropTypes from "prop-types";
import styles from "./templatesCode.module.css";
import { Button, Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { HeaderCode } from "../headerCode/headerCode";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

interface TemplatesCodeProps {
  onGetCodeClick?: () => void;
}

export const TemplatesCode: React.FunctionComponent<TemplatesCodeProps> = ({onGetCodeClick}) => {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);
  const headerCss = `.header-code {
                                            
                    }

                    .navLinkCustom {
                        font-size: 16px !important; /* Adjust the size as needed */
                    }`;
  const headerHtml = `
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
                      `;
  // const onGetCodeClick = () => {

  // };
  // const handleGetCodeClick = () => {
  //   // Navigate to the new page when "Get Code" is clicked
  //    // Open a new tab with a specific URL
  //   //  const newTab = window.open('/get-code', '_blank');
  //   setIsHidden(true);
  //   console.log('isHidden',isHidden);
    
  //   navigate('/get-code');
  // };

  function CustomToggle({ children, eventKey }: { children: string; eventKey: string }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button className="btn btn-primary"
        type="button"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  
  return  (
    <div className={styles["templates-code"]}>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Row>
              <Col xs={10}>
                <HeaderCode/>
              </Col>
              <Col xs={2}>
                <CustomToggle eventKey="0">Get Code</CustomToggle>
              </Col>
            </Row>
          </Card.Header>
          <Accordion.Collapse eventKey="0" className={styles["code-contents"]}>
            <Card.Body>
              <Card>
                <Card.Header>React</Card.Header>
                <Card.Body>
                  {/* <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text> */}
                   <Tabs
                    defaultActiveKey="html"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="html" title=".tsx">
                      <div dangerouslySetInnerHTML={{ __html: headerHtml }}></div>
                    </Tab>
                    <Tab eventKey="css" title=".css">
                      <div dangerouslySetInnerHTML={{ __html: headerCss }}></div>
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

TemplatesCode.propTypes = {};