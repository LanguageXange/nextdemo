import alertStyle from "./alert.module.css";
import cn from "classnames";
// classnames is a library

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [alertStyle.success]: type === "success",
        [alertStyle.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
