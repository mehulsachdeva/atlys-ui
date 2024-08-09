import React, { memo } from 'react';
import styles from './index.module.css';

interface InputType {
  type: 'text' | 'email' | 'password'
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputType) => {
  const { type, placeholder, value, onChange } = props

  return (
    <input 
      className={styles.input} 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
    />
  );
}

export default memo(Input);