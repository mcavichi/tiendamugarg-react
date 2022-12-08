import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, title, img, text, price, stock}) => {
    const handleOnAdd = (quantity) => {
        console.log('Se agrego al carrito ' + quantity)
    }


    return (
            <div>
                <h1>{title}</h1>
                <img src={img} alt={title} style={{ width: 300 }}></img>
                <p>{text}</p>
                <h2>${price}</h2>
                <ItemCount stock={stock} onAdd={handleOnAdd}/>
            </div>
    )
}

export default ItemDetail