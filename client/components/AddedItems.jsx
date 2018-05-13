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

        //Multipled this.state.cost_in_cents by 100 to account for dollars to cents conversion
				let diffCost = this.state.cost_in_cents*100 - this.props.shoppingList[item.id].cost_in_cents

				console.log("original name: ", this.props.shoppingList[item.id].name)
				console.log("updated name: ", this.state.name)

				console.log("original cost: ", this.props.shoppingList[item.id].cost_in_cents)
				console.log("updated cost: ", this.state.cost_in_cents)

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
		return (

// -- ORIGINAL CODE STARTS -- //	
			// <div> 
			// 	{this.props.shoppingList.map(item => {
			// 		return (
			// 			<form key={item.id}>
			// 				<div className="columns is-mobile">
			// 					<div className="column">
			// 						<input onChange={this.handleChange} className="input is-medium" type="text" name="name" placeholder={item.name} />
			// 					</div>
			// 					<div className="column">
			// 						{/* Converts cost in cents to dollars for display purposes */}
			// 						<input onChange={this.handleChange} className="input is-medium" type="text" name="cost_in_cents" placeholder={item.cost_in_cents/100} />
			// 					</div>
			// 					<div className="column">
			// 						<a className="button is-medium is-primary is-outlined is-mobile" onClick={e => this.editItem(e, item)} type="submit" value="edit item">
			// 						Edit
			// 						</a>
			// 					</div>
			// 					<div className="column">
			// 						<a className="button is-medium is-primary is-outlined is-mobile" onClick=
			// 						{e => this.deleteItem(e, item)} type="submit" value="edit item">
			// 						Delete
			// 						</a>
			// 					</div>
			// 				</div>
			// 			</form>
			// 		)
			// 	})} 
			// </div>
// -- ORIGINAL CODE ENDS -- //	


// -- SHOW TEXT VALUES ONLY -- //
			<div>
				{this.props.shoppingList.map(item => {
					return (
						<div>

						{showInputField
			
							? 			
							<form key={item.id}>
			 				<div className="columns is-mobile">
			 					<div className="column">
			 						<input onChange={this.handleChange} className="input is-medium" type="text" name="name" placeholder={item.name} />
			 					</div>
			 					<div className="column">
			 						{/* Converts cost in cents to dollars for display purposes */}
			 						<input onChange={this.handleChange} className="input is-medium" type="text" name="cost_in_cents" placeholder={item.cost_in_cents/100} />
			 					</div>
			 					<div className="column">
								<a className="button is-medium is-primary is-outlined is-mobile" onClick={e => this.editItem(e, item)} type="submit" value="edit item">
								{/* Edit */}
								SAVE
								</a>
							</div>
			 					<div className="column">
			 						<a className="button is-medium is-primary is-outlined is-mobile" onClick=
			 						{e => this.deleteItem(e, item)} type="submit" value="edit item">
			 						Delete
			 						</a>
			 					</div>
			 				</div>
			 			</form>
						 
						 
						 : <form key={item.id}>
			 				<div className="columns is-mobile">
			 					<div className="column">
			 						Item {item.name}
			 					</div>
			 					<div className="column">
			 						Cost {item.cost_in_cents/100}
			 					</div>
			 				</div>
							<div className="column">
								<a className="button is-medium is-primary is-outlined is-mobile" onClick={this.toggleForm} type="submit" value="edit item">
								Edit
								</a>
							</div>
		 	 				<div className="column">
			 					<a className="button is-medium is-primary is-outlined is-mobile" onClick=
								{e => this.deleteItem(e, item)} type="submit" value="edit item">
			 					Delete
			 					</a>
			 				</div>
			 			</form>
						}
				
					
							
					</div>
			)})}
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