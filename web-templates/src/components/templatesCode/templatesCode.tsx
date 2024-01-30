import PropTypes from "prop-types";
import styles from "./templatesCode.module.css";
import { Button, Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { HeaderCode } from "../headerCode/headerCode";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface TemplatesCodeProps {
  onGetCodeClick?: () => void;
}

export const TemplatesCode: React.FunctionComponent<TemplatesCodeProps> = ({onGetCodeClick}) => {
  const htmlCode = '<div><h1>Hello, world!</h1><p>This is HTML code.</p></div>';
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);
  enum ActiveTab {
    REACT = "React",
    ANGULAR = "Angular",
    HTML = "Html"
  }
  const [activeTab, setActiveTab] = useState(ActiveTab.REACT);
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
      <Button variant="success"
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    );
  }

  const handleTabChange = (tab: ActiveTab) => {
    console.log("tab",tab);
    
    setActiveTab(tab);
  };

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
                <Card.Header className={`d-flex justify-content-between align-items-center ${styles["code-header"]}`}>
                  {activeTab === ActiveTab.REACT && 'React'}
                  {activeTab === ActiveTab.ANGULAR && 'Angular'}
                  {activeTab === ActiveTab.HTML && 'HTML/JS'}

                  {activeTab === ActiveTab.REACT &&(
                    <Button 
                      variant="secondary" 
                      className="ml-auto"  
                      onClick={() => handleTabChange(ActiveTab.ANGULAR)}
                      >
                      Angular <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                  )}
                  {activeTab === ActiveTab.ANGULAR &&(
                    <Button 
                      variant="secondary" 
                      className="ml-auto"  
                      onClick={() => handleTabChange(ActiveTab.ANGULAR)}
                      active={activeTab === ActiveTab.ANGULAR}>
                      HTML/JS <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                  )}
                </Card.Header>
                <Card.Body>
                  {activeTab === ActiveTab.REACT && (
                   <Tabs
                    defaultActiveKey="html"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="html" title="headerCode.tsx">
                    <pre className={styles["code-styles"]} style={{ whiteSpace: 'pre' }}>
                      <code>
                        {`import styles from "./headerCode.module.css";\n`}
                        {`import { Col, Container, Form, FormControl, Nav, Navbar, Row } from "react-bootstrap";\n\n`}
                        {`interface HeaderCodeProps {}\n\n`}
                        {`export const HeaderCode: React.FunctionComponent<HeaderCodeProps> = (props) => {\n`}
                        {`  return (\n`}
                        {`    <div className={styles["header-code"]}>\n`}
                        {`      <Container fluid className="mt-3 align-items-start">\n`}
                        {`        <Row>\n`}
                        {`          <Col>\n`}
                        {`            <Navbar bg="light" expand="lg">\n`}
                        {`              <Container fluid>\n`}
                        {`                <Navbar.Brand href="#home" className="ml-0">\n`}
                        {`                  <img\n`}
                        {`                    alt=""\n`}
                        {`                    src="/img/logo.svg"\n`}
                        {`                    width="30"\n`}
                        {`                    height="30"\n`}
                        {`                    className="d-inline-block align-top"\n`}
                        {`                  />{' '}\n`}
                        {`                  WebSite\n`}
                        {`                </Navbar.Brand>\n`}
                        {`                <Nav>\n`}
                        {`                  <Form>\n`}
                        {`                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n`}
                        {`                  </Form>\n`}
                        {`                  <Nav.Link href="#about" className={styles.navLinkCustom}>About</Nav.Link>\n`}
                        {`                  <Nav.Link href="#menu" className={styles.navLinkCustom}>Menu</Nav.Link>\n`}
                        {`                  <Nav.Link href="#contact" className={styles.navLinkCustom}>Contact</Nav.Link>\n`}
                        {`                </Nav>\n`}
                        {`              </Container>\n`}  
                        {`            </Navbar>\n`}
                        {`          </Col>\n`}
                        {`        </Row>\n`}  
                        {`      </Container>\n`}
                        {`    </div>\n`}
                        {`  );\n` }
                        {`};\n\n`}
                        {`HeaderCode.propTypes = {};`}
                      </code>
                    </pre>
                    </Tab>
                    <Tab eventKey="css" title="headerCode.module.css">
                    <pre className={styles["code-styles"]} style={{ whiteSpace: 'pre' }}>
                      <code>
                        {`.header-code {\n`}
                        {`    /* Your CSS styles for .header-code */\n`}
                        {`}\n\n`}
                        {`.navLinkCustom {\n`}
                        {`    font-size: 16px !important; /* Adjust the size as needed */\n`}
                        {`}`}
                      </code>
                    </pre>
                    </Tab>
                  </Tabs>
                  )}

                  {activeTab === ActiveTab.ANGULAR && (
                   <Tabs
                    defaultActiveKey="ts"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="ts" title="header.component.ts">
                    <pre className={styles["code-styles"]} style={{ whiteSpace: 'pre' }}>
                      <code>
                        {`import { Component } from '@angular/core';\n\n`}
                        {`@Component({\n`}
                        {`  selector: 'app-header',\n`}
                        {`  templateUrl: './header.component.html',\n`}
                        {`  styleUrls: ['./header.component.css']\n`}
                        {`})\n`}
                        {`export class HeaderComponent {\n`}
                        {`  constructor() { }\n`}
                        {`}`}
                      </code>
                    </pre>
                    </Tab>
                    <Tab eventKey="html" title="header.component.html">
                    <pre className={styles["code-styles"]} style={{ whiteSpace: 'pre' }}>
                      <code>
                        {`<!-- header.component.html -->\n`}
                        {`<div class="header-code">\n`}
                        {`  <div class="container-fluid mt-3 align-items-start">\n`}
                        {`    <div class="row">\n`}
                        {`      <div class="col">\n`}
                        {`        <nav class="navbar navbar-expand-lg navbar-light bg-light">\n`}
                        {`          <div class="container-fluid">\n`}
                        {`            <a class="navbar-brand ml-0" href="#">\n`}
                        {`              <img alt="" src="/img/logo.svg" width="30" height="30" class="d-inline-block align-top">\n`}
                        {`              WebSite\n`}
                        {`            </a>\n`}
                        {`            <form class="form-inline">\n`}
                        {`              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">\n`}
                        {`            </form>\n`}
                        {`            <ul class="navbar-nav">\n`}
                        {`              <li class="nav-item">\n`}
                        {`                <a class="nav-link" href="#" [ngClass]="'navLinkCustom'">About</a>\n`}
                        {`              </li>\n`}
                        {`              <li class="nav-item">\n`}
                        {`                <a class="nav-link" href="#" [ngClass]="'navLinkCustom'">Menu</a>\n`}
                        {`              </li>\n`}
                        {`              <li class="nav-item">\n`}
                        {`                <a class="nav-link" href="#" [ngClass]="'navLinkCustom'">Contact</a>\n`}
                        {`              </li>\n`}
                        {`            </ul>\n`}
                        {`          </div>\n`}
                        {`        </nav>\n`}
                        {`      </div>\n`}
                        {`    </div>\n`}
                        {`  </div>\n`}
                        {`</div>\n`}
                      </code>
                    </pre>
                    </Tab>
                    <Tab eventKey="css" title="header.component.css">
                    <pre className={styles["code-styles"]} style={{ whiteSpace: 'pre' }}>
                      <code>
                        {`/* header.component.css */\n`}
                        {`.header-code {\n`}
                        {`  \n`}
                        {`}\n\n`}
                        {`.navLinkCustom {\n`}
                        {`  font-size: 16px; /* Adjust the size as needed */\n`}
                        {`}\n`}
                      </code>
                    </pre>
                    </Tab>
                  </Tabs>
                  )}

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