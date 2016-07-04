import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import Loader from '../Loader'

const ButtonLoader = ({ design, size }) => (
  <Loader
    size={size}
    color={design === 'primary' ? 'white' : 'blue'} />
)

export default function Button (props) {
  const {
    className,
    design,
    loading,
    children,
    size,
    success,
    disabled,
    styles,
    ...remainingProps } = props

  const content =
    success && '✔' || (loading
      ? <ButtonLoader design={design} size={size} />
      : children)

  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(`button--${design}`, size, {
    'is-disabled': disabled,
    'is-loading': loading
  }, className)

  return (
    <button className={cls} disabled={loading || success || disabled} {...remainingProps}>
      {content}
    </button>
  )
}

Button.defaultProps = {
  design: 'primary',
  loading: false,
  success: false,
  disabled: false
}

Button.designs = ['primary', 'secondary']
Button.sizes = ['small', 'big']

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(Button.designs),
  size: PropTypes.oneOf(Button.sizes),
  loading: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  styles: PropTypes.object
}
