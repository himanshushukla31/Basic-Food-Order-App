import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
let numOfCartItems = 0

const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
