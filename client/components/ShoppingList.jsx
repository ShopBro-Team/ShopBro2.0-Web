import React from 'react' 
import {connect} from 'react-redux'
import { addShoppingListItem } from '../actions/shoppinglist'

export class ShoppingList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            id: 0
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleChangeTwo = this.handleChangeTwo.bind(this)
        this.addItem = this.addItem.bind(this)
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state)
      }

    addItem(e) {
        e.preventDefault()
        let item = {id: this.state.id++, 
                    name: this.state.name,
                    cost_in_cents: this.state.cost}
        console.log(item.id)
        
        this.props.dispatch(addShoppingListItem(item))
    }

    render() {
      return <div>
        <br/>
         <div className="column is-mobile">
           <div className="field has-addons">
           <p>Hello</p>
             

               <input onChange={this.handleChange} className="input is-medium" type="text" name="name" placeholder="Enter item" />
               <input onChange={this.handleChange} className="input is-medium" type="text" name="cost" placeholder="Enter cost" />
             
             <div className="control">
               <a className="button is-medium is-primary is-outlined is-mobile" onClick={this.addItem} type="submit" value="add item">
                 Add
               </a>
             </div>
           </div>
         </div>
        {/* <input onChange={this.handleChange} type="text" name="Item" placeholder="Shop Item" />
        {/* <input type="submit" value="Add item"/> */}
      </div>
    }
}

const mapStateToProps = (state) => {
console.log(state)
    return {
        shoppinglist: state.shoppinglist
    }
  }

export default connect(mapStateToProps)(ShoppingList)