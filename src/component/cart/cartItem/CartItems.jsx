const CartItems = ({item}) => {
    const {name, price, } = item;
    console.log(item)
    return (
        <div>
            <ul style={{display: 'flex', fontSize: '30px', fontWeight: 'bold', listStyle: 'none', gap:'40px'}}>
                <li>Product Name: {name} </li>
                <li>Price: {price} $</li>
            </ul>
        </div>
    );
};

export default CartItems;