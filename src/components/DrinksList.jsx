import useDrinks from '../hooks/useDrinks'
import { Row } from 'react-bootstrap'
import Drink from './Drink'

const DrinksList = () => {
    const { drinks } = useDrinks()

    return (
        <Row className='mt-4'>
            {drinks.map(drink => (
                <Drink key={drink.idDrink} drink={drink} />
            ))}
        </Row>
    )
}

export default DrinksList