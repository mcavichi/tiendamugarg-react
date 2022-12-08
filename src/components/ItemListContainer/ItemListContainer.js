import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { getProducts, getProductByCategory} from '../../asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

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
            <div className='item-list'>
            <ItemList products={products} />
            </div>
        </div>
    )
}


export default ItemListContainer