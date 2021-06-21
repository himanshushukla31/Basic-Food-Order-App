import React from 'react'
import MealForm from './MealForm'
import styles from './MealItem.module.css'

const MealItem = (props) => {
  return (
    <div className={styles['item-container']}>
      <div className={styles['meal-info']}>
        <h3>{props.name}</h3>
        <cite>{props.description}</cite>
        <h3 className={styles.price}>₹{props.price}</h3>
      </div>
      <div className={styles['meal-form']}>
        <MealForm id={props.id} />
      </div>
    </div>
  )
}

export default MealItem
