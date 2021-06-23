import React, { useContext } from 'react'
import MealForm from './MealForm'
import styles from './MealItem.module.css'
import CartContext from '../../../store/CartContext'

const MealItem = (props) => {
  const ctx = useContext(CartContext)

  const price = `₹${props.price.toFixed(2)}`

  const onCartAddHandler = (amt) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amt,
    })
  }

  return (
    <div className={styles['item-container']}>
      <div className={styles['meal-info']}>
        <h3>{props.name}</h3>
        <cite>{props.description}</cite>
        <h3 className={styles.price}>{price}</h3>
      </div>
      <div className={styles['meal-form']}>
        <MealForm id={props.id} onCartAdd={onCartAddHandler} />
      </div>
    </div>
  )
}

export default MealItem
