import { useEffect, useState } from "react";
import { useModals } from "../../../contexts/ModalsContext";
import styles from "./RegisterModal.module.scss";
import { useLang } from "../../../hooks/useLang";
import { useForm, type SubmitHandler } from "react-hook-form";
import Loader from "../Loader/Loader";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../../../api/api";
import { useAppDispatch } from "../../../store/store";
import { setToken } from "../../../store/slices/authSlice";
import { toast } from "react-toastify";

interface Inputs {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

function RegisterModal() {
  const { register, handleSubmit, formState } = useForm<Inputs>({
    mode: "onChange",
  });

  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();

  const { openRegisterModal, setOpenRegisterModal, setOpenLoginModal } =
    useModals();
  const { t, lang } = useLang();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!Object.values(formState.errors).length) {
      registerUser(data);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(t[lang].toast.reg);
      setOpenRegisterModal(false);
      setOpenLoginModal(true);
    }
  }, [isSuccess]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onMouseDown={() => setOpenRegisterModal(false)}
      className={`${styles.wrapper} ${openRegisterModal && styles.open}`}
    >
      {isLoading && <Loader />}
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.modal}>
        <div
          onClick={() => setOpenRegisterModal(false)}
          className={styles.close}
        >
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

        <p className={styles.title}>{t[lang].register_modal.title}</p>

        <div className={styles.col}>
          <div className={styles.row}>
            {formState.errors.first_name || formState.errors.last_name ? (
              <p>{formState.errors.first_name?.message}</p>
            ) : null}

            <input
              className={styles.input}
              type="text"
              placeholder={t[lang].register_modal.name}
              {...register("first_name", {
                required: t[lang].errors.required,
              })}
            />
            <input
              className={styles.input}
              type="text"
              placeholder={t[lang].register_modal.surname}
              {...register("last_name", {
                required: t[lang].errors.required,
              })}
            />
          </div>
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
              <p>{formState.errors.password?.message}</p>
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

          <div className={styles.field}>
            <input
              className={styles.input}
              type="text"
              placeholder={t[lang].register_modal.rep_password}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.btn}>
            {t[lang].register_modal.btn}
          </button>
          <button
            type="button"
            onClick={() => {
              setOpenRegisterModal(false);
              setOpenLoginModal(true);
            }}
            className={styles.second}
          >
            {t[lang].register_modal.second}
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterModal;
