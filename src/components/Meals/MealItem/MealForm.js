import React, { useRef, useState } from 'react'
import styles from './MealForm.module.css'
import Input from '../../UI/Input'

const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNum = +enteredAmount

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountIsValid(false)
      return
    }

    props.onCartAdd(enteredAmount)
  }

  return (
    <form className={styles.control} onSubmit={submitHandler}>
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
        ref={amountInputRef}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealForm
