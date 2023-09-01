import { Link } from "react-router-dom"
import './Item.css'

const Item = ( { product }) => {
    return (
        <div>
            <img className="img" src={product.img} alt={product.name} style={{ width: 350 }}/>
            <h3>{product.title}</h3>
            <p>$ {product.price}</p>
            <button><Link to={`/detail/${product.id}`}>Ver detalle</Link></button>
        </div>
    )
}

export default Item
