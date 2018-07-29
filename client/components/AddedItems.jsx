// ~*~ This component holds the items that have been added to the shopping list and the functionality to edit and delete the items. ~*~ //
import React from 'react' 
import {connect} from 'react-redux'
import { editShoppingListItem, deleteShoppingListItem, deleteFromTotalSpend, addToTotalSpend } from '../actions/shoppinglist'
import validateCostInput from '../utils/costInput'


class AddedItems extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
				name: '',
				cost: '',
				quantity: '',
				messageCost: '',
  	  	valid: true,
				showInputField: false  // When item added to the list, shows as text with button to edit or delete. When edit selected, text will turn into input boxes, with default text the existing list item details. //
		}
	this.handleChange = this.handleChange.bind(this)
	this.editItem = this.editItem.bind(this)
	this.deleteItem = this.deleteItem.bind(this)
	this.toggleForm = this.toggleForm.bind(this)
	}

	toggleForm () {
		this.setState({showInputField: !this.state.showInputField})
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	editItem(e, item) {
		e.preventDefault()
		// let updateItem is setting the values of the item object that is being edited. Using or operator (||) to only update field if the field has been changed

		let updateItem = {
				id: item.id,

				name: this.state.name || item.name,

				quantity: this.state.quantity || item.quantity,

				unit_cost_in_cents: this.state.cost*100 || item.unit_cost_in_cents,
				
				total_cost_in_cents: this.state.cost*100 * this.state.quantity || item.unit_cost_in_cents * item.quantity 
			}
			
    let updatedName = updateItem.name
    let updatedQuantity = updateItem.quantity
    let updatedUnit_cost_in_cents = updateItem.unit_cost_in_cents
    let updatedTotal_cost_in_cents = updateItem.unit_cost_in_cents *updateItem.quantity
			
    updateItem = { 
      id: item.id, 
      name: updatedName, 
      quantity: updatedQuantity, 
      unit_cost_in_cents: updatedUnit_cost_in_cents, total_cost_in_cents: updatedTotal_cost_in_cents
    }

		// **Below code calculates the value to be dispatched to addToTotalSpend when item edited (the difference between original value and new value)**
		// checkNewCost function compares original and new cost. If the do not match, then take the value from updateItem object (above). Otherwise, take the value from the originalCost variable. This result is then used in the calculation that makes up the diffCost value which is dispatched into addToTotalSpend.
			
    let originalCost = item.total_cost_in_cents
    let newCost = updateItem.total_cost_in_cents

		function checkNewCost () {
			if (originalCost !== newCost) {
				return newCost
			} else {
				return originalCost
			}
		}

		let diffCost = checkNewCost() - originalCost
		
		// validate that cost value is not a negative number before sending to props	
		let costToCheck = checkNewCost()
		let checkValid = validateCostInput(costToCheck)
	
		this.setState({
			messageCost : checkValid.messageCost,
			valid : checkValid.valid
		})

    if(checkValid.valid) {
			this.props.dispatch(editShoppingListItem(updateItem)) // Send updated item object to editShoppingListItem //
			this.props.dispatch(addToTotalSpend(diffCost)) // Send the value of the difference in cost to addToTotalSpend //
			this.toggleForm() // Toggle the view from input fields back to text, showing the now updated values of item and cost //
		}
	}

	//deleteItem gets called by clicking the delete button. It deletes the item both from our shoppingListItem array as well as updates the totalSpend integer
	deleteItem(e, item) {
		e.preventDefault()
		this.props.dispatch(deleteShoppingListItem(item.id))
		this.props.dispatch(deleteFromTotalSpend(item.total_cost_in_cents))
	}
	
	render() {
		const {showInputField} = this.state 
		const {item} = this.props
		return (
			<div>
				<div>
					{showInputField
						? 			
						<form key={item.id}>				  
							<div className='columns is-mobile is-centered'>
							  <div className='level columns'>
								
									<div className='control column is-two-quarters'>
										<input onChange={this.handleChange} className='input is-normal has-text-centered' type='text' name='name' placeholder={item.name} />
									</div>

									<div className='control column is-one-quarater'>
										{/* Converts cost in cents to dollars for display purposes */}
										<input onChange={this.handleChange} className='input is-normal has-text-centered' type='number' name='cost' placeholder={`$${(item.unit_cost_in_cents/100).toFixed(2)}`} />
									</div>

									<div className='control column is-one-quarater'>
										{/* Converts cost in cents to dollars for display purposes */}
										<input onChange={this.handleChange} className='input is-normal has-text-centered' type='number' name='quantity' placeholder={`${(item.quantity)}`} />
									</div>

									<a className='button is-small is-dark is-outlined is-mobile' onClick={e => this.editItem(e, item)} type='submit' value='edit item'>
										Save
									</a>
									<a className='button is-small is-dark is-outlined is-mobile' onClick={e => this.deleteItem(e, item)} type='submit' value='edit item'>
										Delete
									</a>

							  </div>
							</div>
							{this.state.messageCost && <p>{this.state.messageCost}</p>}
							<br/>
						</form>
										
						: 
						<form key={item.id}>
							<div className='columns is-mobile is-centered '>	
								<div className='level columns'>
	
									<div className='control column is-three-quarters'>	
										<text className='is-size-6 has-text-warning is-mobile'>
											{item.name}   
											{`(${item.quantity})`}
											{`$${(item.total_cost_in_cents/100).toFixed(2)}`}
										</text>
									</div>
									

									<a className='button is-small is-dark is-outlined is-mobile' onClick={this.toggleForm} type='submit' value='edit item'>
										Edit
									</a>
									<a className='button is-small is-dark is-outlined is-mobile' onClick={e => this.deleteItem(e, item)} type='submit' value='edit item'>
										Delete
									</a>
								</div>

							</div>
							<br/>
						</form>
					}

				</div>	
			</div>			
		)
	}
}
  
const mapStateToProps = (state) => {
    return {
        shoppingList: state.shoppingList
        }
    }
    
export default connect(mapStateToProps)(AddedItems)  