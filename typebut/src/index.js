import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  return <button {...props} type={ props.type } className={styles[props.type]}>{props.text}</button>
}