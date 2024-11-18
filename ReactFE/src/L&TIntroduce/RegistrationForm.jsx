import React from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import CountdownTimer from './CountdownTimer';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const fields = [
    { name: 'fullName', label: 'Họ tên', type: 'text' },
    { name: 'phoneNumber', label: 'Số điện thoại', type: 'tel' },
    { name: 'email', label: 'Email', type: 'email' },
  ];

  return (
    <main className={styles.registrationContainer}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/01cf1d798edac644b0b8aed96c80e15aaf10fd288cea0f4728e29fd539bf0b15?placeholderIfAbsent=true&apiKey=b8543af2baa644d68dc8e50b9abd59c6" alt="" className={styles.backgroundImage} />
      <section className={styles.formSection}>
        <h1 className={styles.mainTitle}>Đăng ký trong hôm nay</h1>
        <p className={styles.subtitle}>Nhận ưu đãi học phí lên tới 5.000.000 VNĐ</p>
        <form className={styles.registrationForm}>
          <div className={styles.inputGroup}>
            {fields.map((field) => (
              <InputField key={field.name} {...field} />
            ))}
          </div>
          <SelectField name="userType" label="Bạn là" options={['Học sinh', 'Sinh viên', 'Người đi làm']} />
          <SelectField name="nearestCenter" label="Chọn cơ sở gần bạn nhất" options={['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng']} />
          <button type="submit" className={styles.submitButton}>ĐĂNG KÝ NGAY</button>
        </form>
        <CountdownTimer />
      </section>
    </main>
  );
};

export default RegistrationForm;