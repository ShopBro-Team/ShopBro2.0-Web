// ~*~ This component holds the items that have been added to the shopping list and the functionality to edit and delete the items. ~*~ //
import React from 'react' 
import {connect} from 'react-redux'
import { editShoppingListItem, deleteShoppingListItem, deleteFromTotalSpend, addToTotalSpend } from '../actions/shoppinglist'

class AddedItems extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
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
        //**Converts edited dollars to cents**
        // Using or operator (||) to only update field if the field has been changed
				// let updateItem is setting the values of the item object that is being edited. If value has been edited, it will take this.state. If value is unchanged, it will take this.props.

				let updateItem = {
            id: item.id,
            name: this.state.name || this.props.shoppingList[item.id].name,
            cost_in_cents: this.state.cost_in_cents*100 || this.props.shoppingList[item.id].cost_in_cents
				}

				// **Below code calculates the value to be dispatched to addToTotalSpend when item edited (the difference between original value and new value)**
				// originalCost to take existing value in shoppingList object and compares this to the new value entered into input box, via the checkNewCost function.
				// checkNewCost function compares original and new cost. If the do not match, then take the value from updateItem object (above). Otherwise, take the value from the originalCost variable. This result is then used in the calculation that makes up the diffCost value which is dispatched into addToTotalSpend.
				// Solves previous bug where if value wasn't updated during the edit (e.g. only item name updated), then value coming in was producing NaN value in totalSpend.
				
				let originalCost = this.props.shoppingList[item.id].cost_in_cents
				let newCost = this.state.cost_in_cents*100

				function checkNewCost () {
					if (originalCost !== newCost) {
						return updateItem.cost_in_cents
					} else {
						return originalCost
					}
				}

				let diffCost = checkNewCost() - originalCost
			
		this.props.dispatch(editShoppingListItem(updateItem)) // Send updated item object to editShoppingListItem //
		this.props.dispatch(addToTotalSpend(diffCost)) // Send the value of the difference in cost to addToTotalSpend //
		this.toggleForm() // Toggle the view from input fields back to text, showing the now updated values of item and cost //
	}

	deleteItem(e, item) {
		e.preventDefault()
		this.props.dispatch(deleteShoppingListItem(item.id))
		this.props.dispatch(deleteFromTotalSpend(item.cost_in_cents))
	}

	
	render() {
		const {showInputField} = this.state 
		const {item} = this.props
		return (
			<div>
				{showInputField
					? 			
					 
					  <form key={item.id}>				  
						<div className="columns is-mobile is-centered">
							<div className="column is-offset-2">
								<input onChange={this.handleChange} className="input is-medium" type="text" name="name" placeholder={item.name} />
							</div>
							<div className="column">
								{/* Converts cost in cents to dollars for display purposes */}
								<input onChange={this.handleChange} className="input is-medium" type="number" name="cost_in_cents" placeholder={item.cost_in_cents/100} />
							</div>
							<div className="column is-one-third">
								<div className="buttons">
									<a className="button is-medium is-primary is-outlined is-mobile" onClick={e => this.editItem(e, item)} type="submit" value="edit item">
									Save
									</a>
								{/* </div>
								<div className="column"> */}
									<a className="button is-medium is-primary is-outlined is-mobile" onClick=
									{e => this.deleteItem(e, item)} type="submit" value="edit item">
									Delete
									</a>
								</div>
							</div>
						</div>
					  <br/>
					 </form>
									
						 
				: <form key={item.id}>
				   
					<div className="columns is-mobile ">	
						<div className="column is-offset-2">
							<p className="is-size-3 has-text-warning has-background-light">{item.name}</p>
						</div>
						<div className="column">
						<p className="is-size-3 has-text-warning has-background-light">{item.cost_in_cents/100}</p>
						</div>
					
					<div className="column is-one-third">
					  <div className="buttons">
						<a className="button is-medium is-dark is-outlined is-mobile" onClick={this.toggleForm} type="submit" value="edit item">
						Edit
						</a>
						<a className="button is-medium is-dark is-outlined is-mobile" onClick=
						{e => this.deleteItem(e, item)} type="submit" value="edit item">
						Delete
						</a>
					  </div>
					</div>
					</div>
					<br/>
				</form>
						}
			</div>				
		)
	}
}
  
const mapStateToProps = (state) => {
    console.log(state)
    return {
        shoppingList: state.shoppingList
        }
    }
    
export default connect(mapStateToProps)(AddedItems)  