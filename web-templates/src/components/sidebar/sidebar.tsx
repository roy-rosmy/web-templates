import PropTypes from "prop-types";
import styles from "./sidebar.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";

interface SidebarProps {}

export const Sidebar: React.FunctionComponent<SidebarProps> = (props) => {
  return(
     <div className={styles.sidebar}>
      <Container className="mt-5">
        <Row>
          <span className="pt-4">Header</span>
          <span>Button</span>
        </Row>
      </Container>
     </div>
  )
};

Sidebar.propTypes = {};