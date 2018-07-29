// ~*~ This component adds a new item to the shopping list ~*~ //
import React from 'react'
import { connect } from 'react-redux'
import { addShoppingListItem, addToTotalSpend } from '../actions/shoppinglist'
import validateCostInput from '../utils/costInput'

import AddedItemsNew from './AddedItemsNew'

export class ShoppingList extends React.Component {
	constructor(props) {
		super(props)
		this.state = { // This sets the initial state of the input boxes //
			id: 0,
			name: '',
			cost: '',
			quantity: '',
			messageCost: '',
			valid: true
		}
		this.handleChange = this.handleChange.bind(this)
		this.addItem = this.addItem.bind(this)
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	addItem(e) {
		//This function adds the item to the store
		e.preventDefault()
		//NOTE: It may be better to assign id to item in reducer - may cause problems with unique ids
		//**Converted item cost from dollars to cents**
		let item = {
			id: this.state.id++,
			name: this.state.name,
			quantity: this.state.quantity || '1',
			unit_cost_in_cents: this.state.cost * 100,
			total_cost_in_cents: this.state.cost * 100  * (this.state.quantity || '1')
		}
		console.log("item ", item)

		this.setState({
			name: '',
			cost: '',
			quantity: '',
		})
		// validate that cost value is not a negative number before sending to props	
		let costToCheck = this.state.cost * 100
		let checkValid = validateCostInput(costToCheck)

		this.setState({
			messageCost: checkValid.messageCost,
			valid: checkValid.valid
		})
		if (checkValid.valid) {
			this.props.dispatch(addShoppingListItem(item))
			this.props.dispatch(addToTotalSpend(item.total_cost_in_cents))
		}
		//NOTE: Need to add functionality to reset add buttons to placeholder values - use reset?

	}

	// NOTE: The call to AddedItems may be better off in the Main component? //

	render() {
		return <div>
			<br />
			<div className='column is-mobile is-centered'>
				{/* NOTE: Updated so that the map over the AddedItems in the shopping list happens in the ShoppingList.jsx component, instead of AddedItems.jsx component. This means we can isolate the toggle of viewing value or input box to the individual items, rather than the whole list. */}

				<div className = "container is-centered">
					<br/>
						<table className="table is-fullwidth is-text-5 is-centered">
							<thead>
								<tr className="table-row-active-background-color">
									<th className="has-text-6 has-text-left">Item</th>
									<th className="has-text-6 has-text-left">#</th>
									<th className="has-text-6 has-text-left">Totalcost</th>
								</tr>
							</thead>
							<tbody>
								{this.props.shoppingList.map(item => {
									return (
									<AddedItemsNew item={item} key={item.id} />
									)
								})}
							</tbody>
						</table>
			</div>

			<div className='container is-centered is-full-width'>
				<table id='addItemTable' className="table is-fullwidth is-centered">
					<tbody>
						<tr>
							<td id='quantityInput' > 
								<input id='quantityX' onChange={this.handleChange} className='input is-normal has-text-centered' type='number' min='0' value={this.state.quantity} name='quantity' placeholder='#' />
							</td>
							<td id='itemInput' className="has-text-6 has-text-left"> 
								<input onChange={this.handleChange} className='input is-normal has-text-centered' type='text' value={this.state.name} name='name' placeholder='Item' />
							</td>
							<td id='costInput' className="has-text-6 has-text-left"> 
								<input onChange={this.handleChange} className='input is-normal has-text-centered' type='number' min='0' value={this.state.cost} name='cost' placeholder='Cost' />
							</td>
							<td>
							<a className='button is-small is-dark is-outlined is-mobile' onClick={this.addItem} type='submit' value='add item'>
								+
							</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>





			{this.state.messageCost && <p>{this.state.messageCost}</p>}
		</div>
		</div>
	}
}

const mapStateToProps = (state) => {
	return {
		shoppingList: state.shoppingList
	}
}

export default connect(mapStateToProps)(ShoppingList)