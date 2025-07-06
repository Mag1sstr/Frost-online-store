import { useForm, type SubmitHandler } from "react-hook-form";
import { useModals } from "../../../contexts/ModalsContext";
import { useLang } from "../../../hooks/useLang";
import styles from "./LoginModal.module.scss";
import { useLoginUserMutation } from "../../../api/api";
import { useAppDispatch } from "../../../store/store";
import { setToken } from "../../../store/slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { useEffect } from "react";

interface Inputs {
  email: string;
  password: string;
}

function LoginModal() {
  const { register, handleSubmit, formState } = useForm<Inputs>({
    mode: "onChange",
  });

  const [loginUser, { data, isSuccess, isLoading }] = useLoginUserMutation();

  const { openLoginModal, setOpenLoginModal, setOpenRegisterModal } =
    useModals();
  const { t, lang } = useLang();
  const dispatch = useAppDispatch();

  const submit: SubmitHandler<Inputs> = (data) => {
    if (!Object.values(formState.errors).length) {
      loginUser(data);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      setOpenLoginModal(false);
      dispatch(setToken(data.access_token));
      toast.success(t[lang].toast.login);
    }
  }, [isSuccess, dispatch]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      onMouseDown={() => setOpenLoginModal(false)}
      className={`${styles.wrapper} ${openLoginModal && styles.open}`}
    >
      {isLoading && <Loader />}
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.modal}>
        <div onClick={() => setOpenLoginModal(false)} className={styles.close}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 16L8.5 8.5M16 1L8.5 8.5M8.5 8.5L16 16M8.5 8.5L1 1"
              stroke="#C9C9C9"
              strokeWidth="2"
            />
          </svg>
        </div>

        <p className={styles.title}>Вход в учётную запись</p>

        <div className={styles.col}>
          <div className={styles.field}>
            {formState.errors.email && <p>{formState.errors.email.message}</p>}
            <input
              className={styles.input}
              type="text"
              placeholder={t[lang].register_modal.email}
              {...register("email", {
                required: t[lang].errors.required,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t[lang].errors.email_err,
                },
              })}
            />
          </div>
          <div className={styles.field}>
            {formState.errors.password && (
              <p>{formState.errors.password.message}</p>
            )}
            <input
              className={styles.input}
              type="password"
              placeholder={t[lang].register_modal.password}
              {...register("password", {
                required: t[lang].errors.required,
              })}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <>
            <button type="submit" className={styles.btn}>
              Войти
            </button>
            <button
              type="button"
              onClick={() => {
                setOpenLoginModal(false);
                setOpenRegisterModal(true);
              }}
              className={styles.second}
            >
              Создать новую учётную запись
            </button>
          </>
        </div>
      </div>
    </form>
  );
}

export default LoginModal;
