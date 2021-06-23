import React, { useState } from 'react'
import MainHeader from './components/MainHeader/MainHeader'
import MealsSummary from './components/Meals/MealsSummary'
import AvailableMeals from './components/Meals/AvailableMeals'
import CartModal from './components/Cart/CartModal'
import CartProvider from './store/CartProvider'

const App = () => {
  const [showCart, setShowCart] = useState(false) //To display the cart on Click event

  const onShowHandler = () => {
    setShowCart(true)
  }

  const dontShow = () => {
    setShowCart(false)
  }

  return (
    <CartProvider>
      <MainHeader onShow={onShowHandler} />
      <MealsSummary />
      <AvailableMeals />
      {showCart && <CartModal onClose={dontShow} />}
    </CartProvider>
  )
}

export default App
