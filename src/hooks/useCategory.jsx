import CategoryContext from '../context/CategoryProvider'
import { useContext } from 'react'

const useCategory = () => {
    return useContext(CategoryContext)
}

export default useCategory