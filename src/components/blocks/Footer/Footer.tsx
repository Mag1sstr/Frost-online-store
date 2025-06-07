import styles from "./Footer.module.scss";
import mail from "../../../images/footer/Mail.svg";
import insta from "../../../images/footer/Insta.svg";
import phone from "../../../images/footer/Phone.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.link}>
            <img src={insta} alt="instagram" />
            frostauto
          </div>
          <div className={styles.link}>
            <img src={mail} alt="mail" />
            frostauto@gmail.com
          </div>
          <div className={styles.link}>
            <img src={phone} alt="phone" />
            <div>
              г. Астана
              <p>+7 777 777 77 77</p>
            </div>
          </div>
          <div className={styles.link}>
            <img src={phone} alt="phone" />
            <div>
              г. Алматы
              <p>+7 777 777 77 77</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
