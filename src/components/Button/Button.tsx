
import type { ButtonHTMLAttributes } from 'react';
import './Button.css';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  prominence?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export function Button({
  label,
  prominence = 'primary',
  size = 'medium',
  type = 'button',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`ds-button ds-button--${prominence} ds-button--${size} ${className}`.trim()}
      {...props}
    >
      {label}
    </button>
  );
}
