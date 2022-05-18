import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const DrinksContext = createContext()

const DrinksProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState(null)
    const [modal, setModal] = useState(false)
    const [drinks, setDrinks] = useState([])
    const [drink, setDrink] = useState(null)

    useEffect(() => {
        const getDrinkRecipe = async () => {
            if (!drink) return 

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`
            const { data } = await axios.get(url)
            
            setRecipe(data.drinks[0])
        }

        getDrinkRecipe()
    }, [drink])

    const getDrinks = async data => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data.name}&c=${data.category}`

        const { data: result } = await axios.get(url)
        setDrinks(result.drinks)
    }

    const handleModalClick = () => {
        setModal(!modal)
        setRecipe(null)
    }

    const handleDrinkClick = id => {
        setDrink(id)
    }

    return (
        <DrinksContext.Provider 
            value={{
                modal,
                drinks,
                recipe,
                getDrinks,
                handleDrinkClick,
                handleModalClick,
            }}
        >
            {children}
        </DrinksContext.Provider>
    )
}

export { DrinksProvider }

export default DrinksContext