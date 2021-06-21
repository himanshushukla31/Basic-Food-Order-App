import React from 'react'
import MainHeader from './components/MainHeader/MainHeader'
import MealsSummary from './components/Meals/MealsSummary'
import AvailableMeals from './components/Meals/AvailableMeals'
import CartModal from './components/Cart/CartModal'

const App = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <MealsSummary />
      <AvailableMeals />
      {/* <CartModal /> */}
    </React.Fragment>
  )
}

export default App
