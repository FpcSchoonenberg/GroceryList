import React from 'react'

function ListItem(props) {
    return (
        <li key={props.item.id}
            className='list-item'
            onClick={() => props.clickItem(props.item)}>
            {props.item.title} {props.item.amount ? `total amount: ${props.item.amount}` : ""}
        </li>
    )
}

export default ListItem
