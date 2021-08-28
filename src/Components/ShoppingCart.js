import React from 'react'
import List from './List'

function ShoppingCart(props) {

    return (
        <div className='shoppingcart'>
            <h2>ShoppingCart</h2>
            <List items={props.items} clickItem={props.clickItem} />
            <button onClick={props.emptyCart}>empty cart</button>
        </div>
    )
}

export default ShoppingCart