import { Button, Form as FormB, Row, Col, Alert } from 'react-bootstrap'
import useCategory from '../hooks/useCategory'
import useDrinks from '../hooks/useDrinks'
import { useState } from 'react'

const Form = () => {
    const { categories } = useCategory()
    const { getDrinks } = useDrinks()

    const [alert, setAlert] = useState('')
    const [data, setData] = useState({
        name: '',
        category: ''
    })

    const handleSubmit = evt => {
        evt.preventDefault()

        if (Object.values(data).includes('')) {
            setAlert('Todos los campos son obligatorios')
            return
        }

        setAlert('')
        getDrinks(data)
    }

    return (
        <FormB onSubmit={handleSubmit}>
            {alert && <Alert className='text-center' variant='danger'>{alert}</Alert>}

            <Row className='mb-4'>
                <Col md={6}>
                    <FormB.Group>
                        <FormB.Label
                            htmlFor='name'
                        >
                            Nombre de la Bebida:
                        </FormB.Label>
                        <FormB.Control
                            id='name'
                            name='name'
                            type='text'
                            placeholder='Ej: Tequila, Café, Capuccino, etc'
                            onChange={evt => setData({ ...data, name: evt.target.value })}
                            value={data.name}
                        />
                    </FormB.Group>
                </Col>

                <Col md={6}>
                    <FormB.Group>
                        <FormB.Label
                            htmlFor='category'
                        >
                            Categoría:
                        </FormB.Label>
                        <FormB.Select
                            id='category'
                            name='category'
                            onChange={evt => setData({ ...data, category: evt.target.value })}
                            value={data.category}
                        >
                            <option>-- Selecciona Categoría --</option>
                            {categories.map(category => (
                                <option key={category.strCategory} value={category.strCategory}>
                                    {category.strCategory}
                                </option>
                            ))}
                        </FormB.Select>
                    </FormB.Group>
                </Col>
            </Row>

            <Row className='justify-content-end'>
                <Col md={12} lg={3}>
                    <Button className='text-uppercase w-100' variant='danger' type='submit'>
                        Buscar Bebidas
                    </Button>
                </Col>
            </Row>
        </FormB>
    )
}

export default Form