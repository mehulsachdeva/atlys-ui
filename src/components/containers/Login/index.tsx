import React from 'react';
import styles from './index.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.authContainer}>
          <div>
            <div className={styles.header}>WELCOME BACK</div>
            <div className={styles.subHeader}>Log into your account</div>
          </div>
          <div>
            <div className={styles.inputBox}>
              <label className={styles.inputLabel}>Email or Username</label>
            </div>
            <div className={styles.inputBox}>
              <div className={styles.passwordLabel}>
                <label className={styles.inputLabel}>Password</label>
                <div className={`${styles.inputLabel} ${styles.forgotPassword}`}>Forgot password?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;