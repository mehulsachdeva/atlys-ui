import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import Input from 'components/common/shared/Input';
import Button from 'components/common/shared/Button';
import PasswordInput from 'components/common/core/PasswordInput';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.image} src='/images/logo.png' alt='logo' />
      </div>
      <div className={styles.subContainer}>
        <div className={styles.authContainer}>
          <div>
            <div className={styles.header}>WELCOME BACK</div>
            <div className={styles.subHeader}>Log into your account</div>
          </div>
          <div>
            <div className={styles.inputBox}>
              <label className={styles.inputLabel}>Email or Username</label>
              <div className={styles.input}>
                <Input type="text" placeholder="Enter your email or username" />
              </div>
            </div>
            <div className={styles.inputBox}>
              <div className={styles.passwordLabel}>
                <label className={styles.inputLabel}>Password</label>
                <div className={`${styles.inputLabel} ${styles.forgotPassword}`}>Forgot password?</div>
              </div>
              <div>
                <PasswordInput />
              </div>
            </div>
            <div className={styles.button}>
              <Link to="/dashboard" relative="path">
                <Button width='100%'>Login now</Button>
              </Link>
            </div>
            <div className={styles.registerInfo}>
              Not registered yet? <span>Register</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;