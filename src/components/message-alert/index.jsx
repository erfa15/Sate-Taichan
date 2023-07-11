import React from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./message-alert.module.scss";

export default function MessageAlert(props) {
  const { type = "success", message, className, onClick } = props;
  const [isVisible, setIsVisible] = useState(true);

  let messageClassName;

  if (type === "success") {
    messageClassName = `${styles.alert} ${styles.alert__success}`;
  }
  if (type === "error") {
    messageClassName = `${styles.alert} ${styles.alert__error}`;
  }

  const handleClose = () => {
    setIsVisible(false);
    onClick();
  };

  return (
    <div
      className={`${
        className ? `${messageClassName} ${className}` : messageClassName
      } ${isVisible ? null : styles.none}`}
    >
      <span className={styles.alert__label}>{message}</span>
      <IoClose onClick={handleClose} className={styles.alert__button} />
    </div>
  );
}
