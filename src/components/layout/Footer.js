import { FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer({ year }) {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; {year}
      </p>
    </footer>
  );
}

export default Footer;
