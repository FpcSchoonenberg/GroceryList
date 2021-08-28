import React from 'react'
import List from './List'
import InputField from './InputField'

function GroceryList(props) {

    return (
        <div className='grocerylist'>
            <h2>ShoppingList</h2>
            <InputField handleChange={props.handleChange}
                handleSubmit={props.handleSubmit} />
            <List items={props.items}
                clickItem={props.clickItem} />
        </div>
    )
}

export default GroceryList