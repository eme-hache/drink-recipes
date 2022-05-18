import { Modal as ModalB, Image } from 'react-bootstrap'
import useDrinks from '../hooks/useDrinks'

const Modal = () => {
    const { modal, handleModalClick, recipe } = useDrinks()

    const renderIngredients = () => {
        let ingredients = []

        for (let i = 1; i <= 15; i++) {
            if (recipe[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={i}>
                        {recipe[`strIngredient${i}`]}
                        {recipe[`strMeasure${i}`] && ` (${recipe[`strMeasure${i}`]})`}
                    </li>
                )
            }
        }

        return ingredients
    }

    return (
        <ModalB show={modal} onHide={handleModalClick}>
            {recipe && (
                <>
                    <Image
                        src={recipe.strDrinkThumb}
                        alt={`Imagen receta ${recipe.strDrink}`}
                    />
                    <ModalB.Header closeButton >
                        <ModalB.Title>{recipe.strDrink}</ModalB.Title>
                    </ModalB.Header>

                    <ModalB.Body>
                        <div className='p-3'>
                            <h2>Instrucciones</h2>
                            <p>{recipe.strInstructions}</p>

                            <h2>Ingredientes y Cantidades</h2>
                            <ul>
                                {renderIngredients()}
                            </ul>
                        </div>
                    </ModalB.Body>
                </>
            )}
        </ModalB>
    )
}

export default Modal