import PropTypes from "prop-types";
import styles from "./templatesCode.module.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { HeaderCode } from "../headerCode/headerCode";

interface TemplatesCodeProps {}

export const TemplatesCode: React.FunctionComponent<TemplatesCodeProps> = (props) => {
  return  (
    <div className={styles["templates-code"]}>
      <Container fluid className="mt-3 align-items-start">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <span className="d-flex justify-content-end">
                      Get Code 
                    </span>
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
    </div>
  );
};

TemplatesCode.propTypes = {};