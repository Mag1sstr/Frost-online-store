import { type FieldErrors, type UseFormRegister } from "react-hook-form";
import Button from "../../../../elements/Button/Button";
import StageWrapper from "../../../../elements/StageWrapper/StageWrapper";
import styles from "./ContactsStage.module.scss";
import type { CartPageInputs } from "../../../../../types/interfaces";
import { useLang } from "../../../../../hooks/useLang";
import { toast } from "react-toastify";

interface IProps {
  setMainStage: (stage: number) => void;
  setCurrentStage: (fn: (prev: number) => number) => void;
  register: UseFormRegister<CartPageInputs>;
  formErrors: FieldErrors<CartPageInputs>;
}

function ContactsStage({
  setMainStage,
  setCurrentStage,
  register,
  formErrors,
}: IProps) {
  const { t, lang } = useLang();

  const handleNextStage = () => {
    if (!!Object.keys(formErrors).length) {
      toast.error(t[lang].toast.incorrect_data);
    } else {
      setMainStage(2);
      setCurrentStage((prev) => prev + 1);
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
                {formErrors.surname && (
                  <div className={styles.err}>{formErrors.surname.message}</div>
                )}
                <p>Фамилия</p>
                <input
                  type="text"
                  {...register("surname", {
                    required: t[lang].errors.required,
                  })}
                />
              </div>
              <div className={styles.wrapper}>
                {formErrors.name && (
                  <div className={styles.err}>{formErrors.name.message}</div>
                )}
                <p>Имя</p>
                <input
                  type="text"
                  {...register("name", { required: t[lang].errors.required })}
                />
              </div>
              <div className={styles.wrapper}>
                {formErrors.patronymic && (
                  <div className={styles.err}>
                    {formErrors.patronymic.message}
                  </div>
                )}
                <p>Отчество</p>
                <input
                  type="text"
                  {...register("patronymic", {
                    required: t[lang].errors.required,
                  })}
                />
              </div>
              <div className={styles.wrapper}>
                {formErrors.tel && (
                  <div className={styles.err}>{formErrors.tel.message}</div>
                )}
                <p>Телефон</p>
                <input
                  type="tel"
                  {...register("tel", {
                    required: t[lang].errors.required,
                    pattern: {
                      value: /^((\+7|7|8)+([0-9]){10})$/,
                      message: t[lang].errors.phone,
                    },
                  })}
                />
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div className={styles.wrapper}>
              {formErrors.email && (
                <div className={styles.err}>{formErrors.email.message}</div>
              )}
              <p>E-mail</p>
              <input
                type="email"
                {...register("email", {
                  required: t[lang].errors.required,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t[lang].errors.email_err,
                  },
                })}
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
