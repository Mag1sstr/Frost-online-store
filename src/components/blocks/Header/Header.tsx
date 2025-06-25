import styles from "./Header.module.scss";
import logo from "../../../images/logo/logo.svg";
import cart from "../../../images/header/cart.svg";
import MobileLogo from "../../elements/MobileLogo/MobileLogo";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../elements/Search/Search";
import { useLang } from "../../../hooks/useLang";
import LanguageSwitch from "../../elements/LanguageSwitch/LanguageSwitch";
import RegisterModal from "../../elements/RegisterModal/RegisterModal";
import { useModals } from "../../../contexts/ModalsContext";
import { useAuth } from "../../../store/slices/authSlice";
import { useGetCartQuery } from "../../../api/api";

function Header() {
  const { t, lang } = useLang();
  const { setOpenRegisterModal } = useModals();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { count } = useGetCartQuery(null, {
    refetchOnMountOrArgChange: true,
    selectFromResult: ({ data }) => ({
      count: data?.items.length,
    }),
  });

  return (
    <header className={styles.header}>
      <RegisterModal />
      <div className={styles.top}>
        <div className="container">
          <div className={styles.row}>
            <MobileLogo />
            <Link to="/">
              <img
                draggable={false}
                className={styles.logo}
                src={logo}
                alt="logo"
              />
            </Link>
            <LanguageSwitch />

            <div className={styles.city}>
              <p>{t[lang].header.astana}</p>
              <p>{t[lang].header.almaty}</p>
            </div>
            <div className={styles.number}>
              <p>+7 777 777 77 77</p>
              <p>+7 777 777 77 77</p>
            </div>

            <Search />
            {user ? (
              <Link to="/profile">
                <div className={styles.user}>
                  <p>{`${user.firstName}(${user.email})`}</p>
                  <p>Мой профиль</p>
                </div>
              </Link>
            ) : (
              <div
                onClick={() => setOpenRegisterModal(true)}
                className={styles.auth}
              >
                <p>{t[lang].header.login}</p>
                <p>{t[lang].header.register}</p>
              </div>
            )}
            <div className={styles.icons}>
              <div className={styles.row__adaptive}>
                <div
                  className={styles.profile}
                  onClick={() => {
                    if (user) {
                      navigate("/profile");
                    } else {
                      setOpenRegisterModal(true);
                    }
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48882 23.5C5.79265 19.2822 9.55812 16.2337 14 16.2337C18.2644 16.2337 21.9053 19.0434 23.3432 23"
                      stroke="#CDCDCD"
                      strokeWidth="2"
                    />
                    <circle
                      cx="14"
                      cy="10.6968"
                      r="4.78947"
                      stroke="#CDCDCD"
                      strokeWidth="2"
                    />
                    <circle
                      cx="14"
                      cy="14"
                      r="13"
                      stroke="#CDCDCD"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="25"
                    height="27"
                    viewBox="0 0 25 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="#CDCDCD"
                      strokeWidth="2"
                    />
                    <line
                      x1="14.7071"
                      y1="16.2929"
                      x2="21.7071"
                      y2="23.2929"
                      stroke="#CDCDCD"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <Link to="/cart">
                <div className={styles.cart}>
                  <img src={cart} alt="cart" />
                  {count && count > 0 && <div>{count}</div>}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          г. Астана
          <p>+7 707 809 82 17</p>
        </div>
        <div>
          г. Алматы
          <p>+7 707 809 82 17</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
