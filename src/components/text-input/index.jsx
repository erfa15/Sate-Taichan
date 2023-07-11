import styles from "./text-input.module.scss";

export default function TextInput(props) {
  const {
    label,
    id,
    name,
    value,
    onChange,
    required,
    pattern,
    errors,
    type = "text",
    placeholder,
  } = props;

  if (type === "textarea") {
    return (
      <div className={styles.text_input}>
        <label htmlFor={id}>{label} :</label>
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          pattern={pattern}
          className={styles.text_input__textarea}
        />
      </div>
    );
  }

  return (
    <div className={styles.text_input}>
      <div className={styles.text_input__contents}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          pattern={pattern}
          placeholder={placeholder}
          className={styles.text_input__input}
        />
      </div>
      <p className={styles.text_input__error}>{errors}</p>
    </div>
  );
}
