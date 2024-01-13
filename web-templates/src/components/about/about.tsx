import PropTypes from "prop-types";
import styles from "./about.module.css";
import logo from '../../img/logo.svg';
import html_icon from '../../img/icons8-html.svg';
import js_icon from '../../img/icons8-javascript.svg';
import css_icon from '../../img/icons8-css.svg';
import angular_icon from '../../img/icons8-angular.svg';

import { Card, Col, Container, Row } from "react-bootstrap";
interface AboutProps {}

export const About: React.FunctionComponent<AboutProps> = (props) => {
  return(
    <div className={styles.about}>
      <Container fluid className="">
        <Card>
          <Card.Body>
            <Card.Text>
                <Row>
                  <p>
                    This is the room of templates for your websites... You can expect the codes in,
                  </p>
                </Row>
                <Row>
                  <Col>
                    <img src={logo} className={styles.AppLogo} alt="react" /><span className={styles.iconsStyle}>React</span>
                  </Col>
                  <Col>
                    <img src={html_icon} className={styles.otherlogos} alt="html" /><span className={styles.iconsStyle}>HTML</span>
                  </Col>
                  <Col>
                    <img src={js_icon} className={styles.otherlogos} alt="Javascript" /><span className={styles.iconsStyle}>Javascript</span>
                  </Col>
                  <Col>
                    <img src={css_icon} className={styles.otherlogos} alt="CSS" /><span className={styles.iconsStyle}>CSS</span>
                  </Col>
                  <Col>
                    <img src={angular_icon} className={styles.otherlogos} alt="Angular" /><span className={styles.iconsStyle}>Angular</span>
                  </Col>
                </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

About.propTypes = {};