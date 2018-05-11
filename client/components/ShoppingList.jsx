import React from 'react' 
import {connect} from 'react-redux'
import { addShoppingListItem } from '../actions/shoppinglist'

import AddedItems from './AddedItems'

//This component adds a new item to the shopping list

export class ShoppingList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            id: 0,
            name: '',
            cost: ''
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleChangeTwo = this.handleChangeTwo.bind(this)
        this.addItem = this.addItem.bind(this)
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    addItem(e) {
        //This function add the item to the store
        e.preventDefault()
        //NOTE: It may be better to assign id to item in reducer - may cause problems with unique ids
        let item = {id: this.state.id++, 
                    name: this.state.name,
                    cost_in_cents: this.state.cost}
        //console.log(item.id)      
        this.props.dispatch(addShoppingListItem(item))
        this.setState({
            name: '',
            cost: ''
        })
        //NOTE: Need to add functionality to reset add buttons to placeholder values - use reset?
      
    }

    //NOTE: The call to AddedItems may be better off in the Main component

    render() {
      return <div>
        <br/>
         <div className="column is-mobile">
            <div>
                 <AddedItems />  
            </div> 
           <div className="field has-addons">
                 
               <input onChange={this.handleChange} className="input is-medium" type="text" value={this.state.name} name="name" placeholder="Enter item" />
               <input onChange={this.handleChange} className="input is-medium" type="text" value={this.state.cost} name="cost" placeholder="Enter cost" />
             
               <div className="control">
                <a className="button is-medium is-primary is-outlined is-mobile" onClick={this.addItem} type="submit" value="add item">
                 Add
                </a>
             </div>
           </div>
         </div>
      </div>
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        shoppingList: state.shoppingList
    }
}

export default connect(mapStateToProps)(ShoppingList)