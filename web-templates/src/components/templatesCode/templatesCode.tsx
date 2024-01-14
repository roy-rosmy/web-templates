import PropTypes from "prop-types";
import styles from "./templatesCode.module.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { HeaderCode } from "../headerCode/headerCode";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

interface TemplatesCodeProps {
  onGetCodeClick?: () => void;
}

export const TemplatesCode: React.FunctionComponent<TemplatesCodeProps> = ({onGetCodeClick}) => {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);

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

  return  (
    <div className={styles["templates-code"]}>
      {/* <div className={styles[`${isHidden ? 'hidden' : ''}`]}> */}
        <Container fluid className="mt-3 align-items-start templates-page">
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Text>
                        <a href="#" className="text-decoration-none" onClick={onGetCodeClick}>
                          <span className="d-flex justify-content-end fs-6">
                            Get Code 
                          </span>
                        </a>  
                      <HeaderCode/>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Text>
                      Hello
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>  
          </Container>
        {/* </div>     */}
    </div>
  );
};

TemplatesCode.propTypes = {};