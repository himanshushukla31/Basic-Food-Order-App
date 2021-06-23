import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import CartContext from '../../store/CartContext'
import classes from './CartModal.module.css'

const CartModal = (props) => {
  const ctx = useContext(CartContext)
  const totalAmount = `₹${ctx.totalAmount.toFixed(2)}`
  const hasItems = ctx.items.length > 0
  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    ctx.addItem({
      ...item,
      amount: 1,
    })
  }

  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {ctx.items.map((item) => {
          return (
            <CartItem
              name={item.name}
              price={item.price}
              amount={item.amount}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          )
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default CartModal
