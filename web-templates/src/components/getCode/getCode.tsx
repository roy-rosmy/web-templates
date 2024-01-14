import PropTypes from "prop-types";
import styles from "./getCode.module.css";
import { Card, Container, Row } from "react-bootstrap";

interface GetCodeProps {}

export const GetCode: React.FunctionComponent<GetCodeProps> = (props) => {
  return(
    <div className={styles["get-code"]}>
       <Container fluid className="mt-3 align-items-start">
        <Row>
            <Card>
              <Card.Body>
                <Card.Text>
                    
                </Card.Text>
              </Card.Body>
            </Card>
        </Row>  
      </Container>
    </div>
  );
};

GetCode.propTypes = {};