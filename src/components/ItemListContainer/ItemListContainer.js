import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { getProducts, getProductByCategory} from '../../asyncMock' 
import ItemList from "../ItemList/ItemList"
import { useParams, Link } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        if(categoryId) {
            getProductByCategory(categoryId)
                .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
        } else {
            getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }, [categoryId])

    return (
        <div>            
            <h1>{greeting}</h1>
            <div>
                <button className='button'><Link to='/' className='navbar-category'> Ver todo </Link></button>
                <button className='button'><Link to='/category/rickandmorty' className='navbar-category'> Rick And Morty </Link></button>
                <button className='button'><Link to='/category/simpsons' className='navbar-category'> The Simpsons </Link></button>
                <button className='button'><Link to='/category/bttf' className='navbar-category'> Back To The Future </Link></button>
            </div>
            <div className='item-list'>
                <ItemList products={products} />
            </div>
        </div>
    )
}


export default ItemListContainer