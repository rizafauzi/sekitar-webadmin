import { ButtonProps } from 'antd'

export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'destructive-outlined'

export interface ButtonProperties extends Omit<ButtonProps, 'type'> {
  variant?: ButtonVariant
}

export interface BackButtonProperties {
  onClick?: () => void
}
