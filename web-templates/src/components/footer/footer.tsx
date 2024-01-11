import PropTypes from "prop-types";
import styles from "./footer.module.css";

interface FooterProps {}

export const Footer: React.FunctionComponent<FooterProps> = (props) => {
  return <div className={styles.footer}></div>;
};

Footer.propTypes = {};