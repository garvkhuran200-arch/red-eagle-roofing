import { forwardRef } from 'react'
import styles from './Button.module.css'

const Button = forwardRef(function Button(
  { as = 'button', variant = 'primary', size = 'md', className = '', children, ...props },
  ref
) {
  const Component = as
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  )
})

export default Button