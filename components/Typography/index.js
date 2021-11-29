import styles from './typography.module.css'

const Typography = ({ as: Component = 'p', children, type = 'paragraph', className = '' }) => {
  return (
    <Component className={`${styles[type]} ${className}`}>
      {children}
    </Component>
  )
}

export default Typography
