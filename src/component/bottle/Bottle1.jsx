import React from 'react';
import './bottle.css'

const Bottle1 = ({bottle, handleAddToCard}) => {
    const {name, img, id } = bottle;
    return (
        <div className='img-cart'>
            <img src={img} alt="" />
            <h2>Name: {name} </h2>
            <h1> {id} </h1>

            <button onClick={() => handleAddToCard(bottle)} className='purchase-btn'>Purchase</button>
        </div>
    );
};

export default Bottle1;