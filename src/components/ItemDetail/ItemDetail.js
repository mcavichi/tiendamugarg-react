import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, title, img, text, price, stock}) => {
    const handleOnAdd = (quantity) => {
        console.log('Se agrego al carrito ' + quantity)
    }


    return (
            <div>
                <img src={img} alt={title} style={{ width: 450}}></img>
                <h2>{title}</h2>
                <p>{text}</p>
                <h2>${price}</h2>
                <ItemCount stock={stock} onAdd={handleOnAdd}/>
            </div>
    )
}

export default ItemDetail