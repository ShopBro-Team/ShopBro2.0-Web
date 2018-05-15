// ~*~ This component adds a new item to the shopping list ~*~ //
import React from 'react' 
import {connect} from 'react-redux'
import { addShoppingListItem, addToTotalSpend } from '../actions/shoppinglist'
import validateCostInput from '../utils/costInput'

import AddedItems from './AddedItems'

export class ShoppingList extends React.Component {
	constructor (props) {
		super(props)
		this.state = { // This sets the initial state of the input boxes //
			id: 0,
			name: '',
			cost: '',
			messageCost: '',
    	valid: true
		}
		this.handleChange = this.handleChange.bind(this)
		this.addItem = this.addItem.bind(this)
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

    addItem(e) {
        //This function adds the item to the store
        e.preventDefault()
        //NOTE: It may be better to assign id to item in reducer - may cause problems with unique ids
        //**Converted item cost from dollars to cents**
        let item = {id: this.state.id++, 
                    name: this.state.name,
                    cost_in_cents: this.state.cost*100}      

				this.setState({
					name: '',
					cost: '' , 
				})
				// validate that cost value is not a negative number before sending to props	
				let costToCheck = this.state.cost*100
				let checkValid = validateCostInput(costToCheck)
				
				this.setState({
					messageCost : checkValid.messageCost,
					valid : checkValid.valid
				})
				if(checkValid.valid) {
					this.props.dispatch(addShoppingListItem(item))
					this.props.dispatch(addToTotalSpend(item.cost_in_cents))
				}
        //NOTE: Need to add functionality to reset add buttons to placeholder values - use reset?
      
    }

	// NOTE: The call to AddedItems may be better off in the Main component? //

	render() {
		return <div>
			<br/>
			<div className="column is-mobile is-centered">
				{/* NOTE: Updated so that the map over the AddedItems in the shopping list happens in the ShoppingList.jsx component, instead of AddedItems.jsx component. This means we can isolate the toggle of viewing value or input box to the individual items, rather than the whole list. */}
				
					<h2 className="title is-3">Shopping List</h2>
					<br/>
				
					{this.props.shoppingList.map(item => {
					return (
						<AddedItems item={item} key={item.id} />
					)})}
				</div>

				{/* Renders the initial input fields and add button to start the shopping list and it the starting point for all new items being added to the shopping list. */}
			<div className="column is-mobile is-centered">	
				<div className="field has-addons">
					{/* Input field for shopping item */}
					<input onChange={this.handleChange} className="input is-medium" type="text" value={this.state.name} name="name" placeholder="Enter item" />
					{/* Input field for the cost of the item */}
					<input onChange={this.handleChange} className="input is-medium" type="number" min="0" value={this.state.cost} name="cost" placeholder="Enter cost" />
					<div className="control">
						{/* Button to add the item */}
						<a className="button is-medium is-dark is-outlined is-mobile" onClick={this.addItem} type="submit" value="add item">
							Add
						</a>
					</div>
				</div>
			</div>
			<br/>
				{this.state.messageCost && <p>{this.state.messageCost}</p>}
			</div>
	}
}

const mapStateToProps = (state) => {
	return {
		shoppingList: state.shoppingList
	}
}

export default connect(mapStateToProps)(ShoppingList)