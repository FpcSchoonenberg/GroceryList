import React from 'react'
import GroceryList from './Components/GroceryList'
import ShoppingCart from './Components/ShoppingCart'
import Header from './Components/Header'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            groceryListItems: [
                { id: 1, title: 'appels' },
                { id: 2, title: 'avocado' },
                { id: 3, title: 'kokosnoot' },
                { id: 4, title: 'jelle' },
                { id: 5, title: 'perzik' }],
            shoppingCartItems: [{ id: 60, title: 'perzik', amount: 4 }],
        }
    }

    //add grocery to shoppinglist and calculate amount, which will be used for conditional 
    //rendering of the listitems
    handleClickGroceryListItem = (item) => {
        function checkTitle(item) {
            return item.title === shoppingCartItemTitle
        }
        const shoppingCartItemTitle = item.title
        if (!this.state.shoppingCartItems.find(checkTitle)) {
            const newShoppingItem = { id: item.id + 1000, title: item.title, amount: 1 }
            this.setState(prevState => {
                return { shoppingCartItems: [...prevState.shoppingCartItems, newShoppingItem] }
            })
        }
        else {
            const copyShoppingCartItems = [...this.state.shoppingCartItems]
            const updatedAmount = copyShoppingCartItems.map(shoppingCartItem => {
                if (shoppingCartItem.title === item.title) {
                    shoppingCartItem.amount++;
                }
                return shoppingCartItem;
            });
            this.setState({ shoppingCartItems: updatedAmount });
        };
    }

    emptyCart = () => {
        this.setState({ shoppingCartItems: [] })
    }

    decrease = (item) => {
        console.log(item)        
    }

    //catch value of inputfield and save to a temporary variable in state
    // then onSubmit a new shoppinglist-item wil be composed and saved in state.grocerylist
    handleChange = (event) => {
        const inputFieldValue = event.target.value
        this.setState({ groceryTitle: inputFieldValue })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            const id = prevState.groceryListItems.length + 1
            const title = this.state.groceryTitle
            const newGroceryItem = { id: id, title: this.state.groceryTitle }
            return { groceryListItems: [...prevState.groceryListItems, newGroceryItem] }
        })
    }

    render() {
        return (
            <div class='container'>
                <Header />
                <GroceryList className='child' items={this.state.groceryListItems}
                    clickItem={this.handleClickGroceryListItem}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />
                <ShoppingCart className='child' items={this.state.shoppingCartItems}
                    clickItem={this.decrease}
                        emptyCart={this.emptyCart} />
                </div>
        )
    }
}

export default Container
