import styles from "./MobileLogo.module.scss";
import logoIcon from "../../../images/logo/logo-icon.png";
import logoText from "../../../images/logo/logo-text.png";
import { Link } from "react-router-dom";
function MobileLogo() {
  return (
    <Link to="/">
      <div className={styles.logo__mobile}>
        <img draggable={false} src={logoIcon} alt="" />
        <img draggable={false} src={logoText} alt="" />
      </div>
    </Link>
  );
}

export default MobileLogo;
