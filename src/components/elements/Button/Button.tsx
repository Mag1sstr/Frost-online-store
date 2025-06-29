import styles from "./Button.module.scss";

interface IProps {
  width?: number | string;
  height?: number | string;
  fontSize?: number | string;
  fontWeight?: number;
  children: React.ReactNode;
  start?: boolean;
  center?: boolean;
  end?: boolean;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

function Button({
  children,
  fontSize = 18,
  fontWeight = 600,
  width,
  height,
  start,
  center,
  end,
  onClick,
  type = "button",
}: IProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: start
          ? "flex-start"
          : center
          ? "center"
          : end
          ? "flex-end"
          : "",
      }}
    >
      <button
        className={styles.btn}
        style={{ fontSize, fontWeight, width, height }}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
