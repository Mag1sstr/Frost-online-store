import Button from "../../../../elements/Button/Button";
import StageWrapper from "../../../../elements/StageWrapper/StageWrapper";
import styles from "./ContactsStage.module.scss";
import type { IContactsValues } from "../../../../../types/interfaces";
import { useLang } from "../../../../../hooks/useLang";
import { toast } from "react-toastify";

interface IProps {
  setMainStage: (stage: number) => void;
  setCurrentStage: (fn: (prev: number) => number) => void;
  contactsValues: IContactsValues;
  setContactsValues: (fn: (prev: IContactsValues) => IContactsValues) => void;
}

function ContactsStage({
  setMainStage,
  setCurrentStage,
  contactsValues,
  setContactsValues,
}: IProps) {
  const { t, lang } = useLang();

  const validatePhoneNumber = (phoneNumber: string) => {
    const regex = /^((\+7|7|8)+([0-9]){10})$/;
    return regex.test(phoneNumber);
  };
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleNextStage = () => {
    if (
      !!contactsValues.name.length &&
      !!contactsValues.surname.length &&
      !!contactsValues.patronymic.length &&
      !!contactsValues.tel.length &&
      !!contactsValues.email.length &&
      validatePhoneNumber(contactsValues.tel) &&
      validateEmail(contactsValues.email)
    ) {
      setMainStage(2);
      setCurrentStage((prev) => prev + 1);
    } else {
      toast.error(t[lang].toast.incorrect_data);
    }
  };

  return (
    <>
      <StageWrapper>
        <h3 className={styles.title}>Контактные данные</h3>
        <div className={styles.row}>
          <div className={styles.block}>
            <div className={styles.col}>
              <div className={styles.wrapper}>
                <p>Фамилия</p>
                <input
                  type="text"
                  value={contactsValues.surname}
                  onChange={(e) =>
                    setContactsValues((prev) => ({
                      ...prev,
                      surname: e.target.value,
                    }))
                  }
                />
              </div>
              <div className={styles.wrapper}>
                <p>Имя</p>
                <input
                  type="text"
                  value={contactsValues.name}
                  onChange={(e) =>
                    setContactsValues((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </div>
              <div className={styles.wrapper}>
                <p>Отчество</p>
                <input
                  type="text"
                  value={contactsValues.patronymic}
                  onChange={(e) =>
                    setContactsValues((prev) => ({
                      ...prev,
                      patronymic: e.target.value,
                    }))
                  }
                />
              </div>
              <div className={styles.wrapper}>
                {!validatePhoneNumber(contactsValues.tel) &&
                  !!contactsValues.tel.length && (
                    <div className={styles.err}>{t[lang].errors.phone}</div>
                  )}
                <p>Телефон</p>
                <input
                  type="tel"
                  value={contactsValues.tel}
                  onChange={(e) =>
                    setContactsValues((prev) => ({
                      ...prev,
                      tel: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div className={styles.wrapper}>
              {!validateEmail(contactsValues.email) &&
                !!contactsValues.email.length && (
                  <div className={styles.err}>{t[lang].errors.email_err}</div>
                )}
              <p>E-mail</p>
              <input
                type="email"
                value={contactsValues.email}
                onChange={(e) =>
                  setContactsValues((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </StageWrapper>
      <Button onClick={handleNextStage} width={350} height={50} end>
        Подтвердить
      </Button>
    </>
  );
}

export default ContactsStage;
