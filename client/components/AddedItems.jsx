import React from 'react' 
import {connect} from 'react-redux'
import { editShoppingListItem, deleteShoppingListItem, deleteFromTotalSpend } from '../actions/shoppinglist'


//This component is for editing and deleting an item in the shopping list

class AddedItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    this.handleChange = this.handleChange.bind(this)
    this.editItem = this.editItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        //console.log(this.state)
    }

    editItem(e, item) {
        e.preventDefault()

        //**Converts edited dollars to cents**
        // Using or operator (||) to only update field if the field has been changed
        let updateItem = {
            id: item.id,
            name: this.state.name || this.props.shoppingList[item.id].name,
            cost_in_cents: this.state.cost_in_cents || this.props.shoppingList[item.id].cost_in_cents*100
        }

        this.props.dispatch(editShoppingListItem(updateItem))
        // this.props.dispatch(editTotalSpend(updateItem.cost_in_cents)) - Rosie and Annika work in progress
    }

    deleteItem(e, item) {
        e.preventDefault()
        console.log(item.id)

        this.props.dispatch(deleteShoppingListItem(item.id))
        this.props.dispatch(deleteFromTotalSpend(item.cost_in_cents))


    }

    render() {
        return (
        <div> 
            {this.props.shoppingList.map(item => {
                return (
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
                                    Edit
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

                )
            })} 
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