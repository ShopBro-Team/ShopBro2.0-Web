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
		// TO DO
	}

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
				I am things
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