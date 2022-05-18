import DrinksContext from '../context/DrinksProvider'
import { useContext } from 'react'

const useDrinks = () => {
    return useContext(DrinksContext)
}

export default useDrinks