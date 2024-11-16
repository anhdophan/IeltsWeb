import React, { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    ngày: 0,
    giờ: 6,
    phút: 2,
    giây: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdownContainer}>
      <p className={styles.countdownTitle}>Ưu đãi hết hạn sau</p>
      <div className={styles.timerWrapper}>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className={styles.timerUnit}>
            <div className={styles.timerValue}>{value.toString().padStart(2, '0')}</div>
            <div className={styles.timerLabel}>{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;