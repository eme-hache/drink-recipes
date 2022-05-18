import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const CategoryContext = createContext()

const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        const { data } = await axios.get(url)
        
        setCategories(data.drinks)
    }

    useEffect(() => {
        getCategories()
    }, []) 

    return (
        <CategoryContext.Provider 
            value={{
                categories
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export { CategoryProvider }

export default CategoryContext