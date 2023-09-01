import { useState, useEffect, useContext } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { ProductosContext } from "../../App"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const {setProductos} = useContext(ProductosContext)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [productId])

    if(isLoading) {
        return <h1>Cargando producto...</h1>
    }


    return(
        <div>
            <h1>DETALLE DE PRODUCTO</h1>
            <ItemDetail {...product} />
            <button onClick={() => { setProductos(product.id)}}>Agregar al carrito</button>
        </div>
    )
}

export default ItemDetailContainer