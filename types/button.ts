export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  name?: string
  value?: string | number
  form?: string
  class?: string
  onClick?: () => void
}