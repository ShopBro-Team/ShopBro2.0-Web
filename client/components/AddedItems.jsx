import React from 'react' 
import {connect} from 'react-redux'
import { editShoppingListItem } from '../actions/shoppinglist'

//This component is for editing and deleting an item in the shopping list

class AddedItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        //console.log(this.state)
    }

    editItem(e, item) {
        e.preventDefault()

        let updateItem = {
            id: item.id,
            name: this.state.name || this.props.shoppingList[item.id].name,
            cost_in_cents: this.state.cost_in_cents || this.props.shoppingList[item.id].cost_in_cents
        }

        this.props.dispatch(editShoppingListItem(updateItem))
    }

    render() {
        return (
        <div> 
            <p>HELLO  </p>
            {this.props.shoppingList.map(item => {
                return (
                    <form key={item.id}>
                        <div className="columns is-mobile">
                            <div className="column">
                                <input onChange={this.handleChange} className="input is-medium" type="text" name="name" placeholder={item.name} />
                            </div>
                            <div className="column">
                                <input onChange={this.handleChange} className="input is-medium" type="text" name="cost_in_cents" placeholder={item.cost_in_cents} />
                            </div>
                            <div className="column">
                                <a className="button is-medium is-primary is-outlined is-mobile" onClick={e => this.editItem(e, item)} type="submit" value="edit item">
                                    Edit
                                </a>
                            </div>
                            <div className="column">
                                <a className="button is-medium is-primary is-outlined is-mobile" type="submit" value="edit item">
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