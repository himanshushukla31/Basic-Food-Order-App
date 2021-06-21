import React from 'react'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import styles from './AvailableMeals.module.css'

const MealsList = [
  {
    id: 'm1',
    name: 'Pizza',
    description: 'I think of dieting, then I eat pizza',
    price: 450,
  },
  {
    id: 'm2',
    name: 'Noodles',
    description:
      'Peace will come to the world when the people have enough noodles to eat. ...',
    price: 250,
  },
  {
    id: 'm3',
    name: 'Coffee',
    description: 'Coffee is a beverage that puts one to sleep when not drank',
    price: 55,
  },
  {
    id: 'm4',
    name: 'Muffins',
    description: 'Its always nice to have a stud muffin at the table.',
    price: 80,
  },
]

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {MealsList.map((item) => {
            return (
              <MealItem
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            )
          })}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
