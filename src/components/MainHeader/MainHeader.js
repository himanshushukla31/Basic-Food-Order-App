import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import styles from './MainHeader.module.css'

const MainHeader = (props) => {
  return (
    <header>
      <nav className={styles.nav}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShow} />
      </nav>
      <div className={styles.mainImage}>
        <img
          src='https://kewpizza.com.au/wp-content/uploads/2018/12/owner-bg.png'
          alt=''
        />
      </div>
    </header>
  )
}

export default MainHeader
