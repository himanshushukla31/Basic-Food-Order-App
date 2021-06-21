import React, { useState } from 'react'
import styles from './MealForm.module.css'
import Input from '../../UI/Input'

const MealForm = (props) => {
  return (
    <form className={styles.control}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='button'>+Add</button>
    </form>
  )
}

export default MealForm
