import { Link } from "react-router-dom"
import './Item.css'

const Item = ( { product }) => {
    return (
        <div>
            <img className="img" src={product.img} alt={product.name} style={{ width: 300 }}/>
            <h3>{product.title}</h3>
            <p>$ {product.price}</p>
            <p>{product.category}</p>
            <Link to={`/detail/${product.id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item
