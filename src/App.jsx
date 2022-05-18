import { CategoryProvider } from './context/CategoryProvider'
import { DrinksProvider } from './context/DrinksProvider'
import DrinksList from './components/DrinksList'
import { Container } from 'react-bootstrap'
import Modal from './components/Modal'
import Form from './components/Form'
import Beer from './assets/beer.png'

const App = () => {
  return (
    <CategoryProvider>
      <DrinksProvider>
        <header className='py-5 flex' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1>Recetas de Bedidas</h1>
          <img
            src={Beer}
            alt='Beer'
            height={50}
            width={90}
            style={{ objectFit: 'contain' }}
          />
        </header>

        <Container className='mt-5'>
          <Form />
          <DrinksList />
          <Modal />
        </Container>
      </DrinksProvider>
    </CategoryProvider>
  )
}

export default App
