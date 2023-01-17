import { BTN_STYLE } from './constant'
import { ButtonProps } from './interface'

export const Button: React.FC<ButtonProps> = ({
  className,
  icon,
  children,
  ...props
}) => (
  <button
    className={`flex items-center justify-center gap-x-2 ${BTN_STYLE} ${className}`}
    {...props}
  >
    {children}
    {icon ? <i> {icon} </i> : null}
  </button>
)
