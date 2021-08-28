import React from 'react'
import ListItem from './ListItem'

function List(props) {
    const allItems = props.items.map(item => <ListItem key={item.id} item={item} clickItem={props.clickItem} />)
    return (
        <ul>
            {allItems}
        </ul>
    )
}

export default List