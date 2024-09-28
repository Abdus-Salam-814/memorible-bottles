import CartItems from "./cartItem/cartItems";

const Cart = ({cart}) => {
   
    

    return (
        <div>
            <h1>Cart: {cart.length} </h1>
            
            {
                cart.map(item => <CartItems
                item={item}
                ></CartItems>)
            }



        </div>
    );
};

export default Cart;