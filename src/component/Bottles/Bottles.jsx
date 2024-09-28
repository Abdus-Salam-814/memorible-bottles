
import { useEffect, useState } from "react";
import Bottle1 from "../bottle/Bottle1";
import './Bottles.css'
import { addToLS, getStorageCart } from "../utilities/localStorage";
import Cart from "../cart/cart";


const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottoles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    // load cart form Local Storage 

    useEffect(() =>{
        console.log(bottles.length)
        
        if(bottles.length){
      const storedCart = getStorageCart();
    //   console.log(storedCart); 
    const saveCart = [];
      for(const id of storedCart){
        // console.log(id);
        const bottle = bottles.find(bottle => bottle.id === id );
        // console.log(bottle)

        if(bottle){
          saveCart.push(bottle)
        }

      }

      console.log(saveCart)
      setCart(saveCart)

        }

    //     if(bottles.length > 0){
    //   const storedCart = getStorageCart();
    // //   console.log(storedCart); 
    //   for(const id of storedCart){
    //     // console.log(id);
    //     const bottle = bottles.find(bottle => bottle.id === id );
    //     console.log(bottle)
    //   }

    //     }

    } ,[bottles])


    const handleAddToCard = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart)
        addToLS(bottle.id);
    }


    return (
        <div>
            <h1>Bottle Available: {bottles.length} </h1>
            <Cart 
            key={cart.id}
            cart={cart}></Cart>

         
           

<div className="img-container">
    
{
            bottles.map(bottle =>
                    <Bottle1 
                    key={bottle.id}
                    bottle={bottle}
                    handleAddToCard={handleAddToCard}
                    

                    ></Bottle1>
            )
        }


</div>


        </div>
    );
};

export default Bottles;

