import { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import CartContext from '../../store/CartContext'

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext)

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

  const numberOfCartItems = ctx.items.reduce((currNumber, item) => {
    return +currNumber + +item.amount
  }, 0)

  const { items } = ctx

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 200)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  let btnStyle = `${styles.button} ${btnIsHighlighted ? styles.bump : ' '} `

  return (
    <button className={btnStyle} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
