import React from "react";
import styles from "./button.module.scss";

export default function Button(props) {
  const { styled = "primary", children, className, ...rest } = props;
  let buttonClassName;

  if (styled === "primary") {
    buttonClassName = `${styles.primary} ${className}`;
  }

  if (styled === "secondary") {
    buttonClassName = `${styles.secondary} ${className}`;
  }
  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
}
