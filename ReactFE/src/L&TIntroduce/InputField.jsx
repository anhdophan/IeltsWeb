import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ name, label, type }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name} className="visually-hidden">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={label}
        className={styles.input}
        required
      />
    </div>
  );
};

export default InputField;