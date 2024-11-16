import React from 'react';
import styles from './SelectField.module.css';

const SelectField = ({ name, label, options }) => {
  return (
    <div className={styles.selectWrapper}>
      <label htmlFor={name} className="visually-hidden">{label}</label>
      <select id={name} name={name} className={styles.select} required>
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;