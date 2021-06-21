import React, { Fragment } from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'

const Dummy_Data = [
  { name: 'Noodles', price: 250, quantity: 2 },
  {
    name: 'Pizza',
    price: 450,
    quantity: 3,
  },
  {
    name: 'Muffins',
    price: 80,
    quantity: 1,
  },
]

const CartModal = () => {
  return (
    <Modal>
      <ul>
        {Dummy_Data.map((item) => {
          return (
            <CartItem
              name={item.name}
              price={item.price}
              amount={item.quantity}
            />
          )
        })}
      </ul>
      <button>close</button>
      <button>order</button>
    </Modal>
  )
}

export default CartModal
