import React, { memo, CSSProperties } from 'react';
import styles from './index.module.css';

interface ButtonType {
  width?: string | number
  children?: React.ReactNode
  disabled?: boolean
  onClick?: (e: any) => void
}

const Button = (props: ButtonType) => {
  const { width, children, disabled, onClick } = props

  return (
    <button 
      style={{ '--width': (typeof width === 'number' ? `${width}px` : width) || 'max-content' } as CSSProperties}
      className={`${styles.button} ${disabled ? styles.disabled : ''}`} 
      disabled={disabled}
      onClick={onClick} 
    >
      {children}
    </button>
  );
}

export default memo(Button);