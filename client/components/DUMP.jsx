// -- ROSIE'S DUMP -- //
// Had this when working through bug fixes to get the render of shopping list items and functionality working correctly. We can totally delete this DUMP.jsx. Just keeping here if anyone is interested for right nwo.


// Useful console logs when working out the bugs under editShoppingListItem()
// --------------------------------------------------------------- //
// console.log("original name: ", this.props.shoppingList[item.id].name)
// console.log("updated name: ", this.state.name)

// console.log("original cost: ", this.props.shoppingList[item.id].cost_in_cents)
// console.log("updated cost: ", this.state.cost_in_cents)

// console.log("updated item being passed to dispatch: ", updateItem)
// console.log("diff cost value being passed to dispatch: ", diffCost)
// --------------------------------------------------------------- //


// --------------------------------------------------------------- //	
	 <div> 
		 {/* Renders items as they are created/edited/removed from the list.  */}
		 <AddedItems />   
	 </div>  
// --------------------------------------------------------------- //	
	


// -- ORIGINAL render() CODE STARTS -- //
// --------------------------------------------------------------- //
// render() {
// 	const {showInputField} = this.state 
// 	return (
// 		<div> 
// 			{this.props.shoppingList.map(item => {
// 				return (
// 					<form key={item.id}>
// 						<div className="columns is-mobile">
// 							<div className="column">
// 								<input onChange={this.handleChange} className="input is-medium" type="text" name="name" placeholder={item.name} />
// 							</div>
// 							<div className="column">
// 								{/* Converts cost in cents to dollars for display purposes */}
// 								<input onChange={this.handleChange} className="input is-medium" type="text" name="cost_in_cents" placeholder={item.cost_in_cents/100} />
// 							</div>
// 							<div className="column">
// 								<a className="button is-medium is-primary is-outlined is-mobile" onClick={e => this.editItem(e, item)} type="submit" value="edit item">
// 								Edit
// 								</a>
// 							</div>
// 							<div className="column">
// 								<a className="button is-medium is-primary is-outlined is-mobile" onClick=
// 								{e => this.deleteItem(e, item)} type="submit" value="edit item">
// 								Delete
// 								</a>
// 							</div>
// 						</div>
// 					</form>
// 				)
// 			})} 
// 		</div>
// 	)
// }
// --------------------------------------------------------------- //
// -- ORIGINAL render() CODE ENDS -- //	

// -- VERSION 2.0 render() CODE STARTS -- //
// --------------------------------------------------------------- //
// render() {
// 	const {showInputField} = this.state 
// 	return (
// 		<div>
// 			{this.props.shoppingList.map(item => {
// 				return (
// 					<div>

// 					{showInputField
		
// 						? 			
// 						<form key={item.id}>
// 						 <div className="columns is-mobile">
// 							 <div className="column">
// 								 <input onChange={this.handleChange} className="input is-medium" type="text" name="name" placeholder={item.name} />
// 							 </div>
// 							 <div className="column">
// 								 {/* Converts cost in cents to dollars for display purposes */}
// 								 <input onChange={this.handleChange} className="input is-medium" type="text" name="cost_in_cents" placeholder={item.cost_in_cents/100} />
// 							 </div>
// 							 <div className="column">
// 							<a className="button is-medium is-primary is-outlined is-mobile" onClick={e => this.editItem(e, item)} type="submit" value="edit item">
// 							{/* Edit */}
// 							SAVE{item.id}
// 							</a>
// 						</div>
// 							 <div className="column">
// 								 <a className="button is-medium is-primary is-outlined is-mobile" onClick=
// 								 {e => this.deleteItem(e, item)} type="submit" value="edit item">
// 								 Delete
// 								 </a>
// 							 </div>
// 						 </div>
// 					 </form>
					 
					 
// 					 : <form key={item.id}>
// 						 <div className="columns is-mobile">
							
// 							 <div className="column">
// 								 Item {item.name}
// 							 </div>
// 							 <div className="column">
// 								 Cost {item.cost_in_cents/100}
// 							 </div>
// 						 </div>
// 						<div className="column">
// 							<a className="button is-medium is-primary is-outlined is-mobile" onClick={this.toggleForm} type="submit" value="edit item">
// 							Edit
// 							</a>
// 						</div>
// 							<div className="column">
// 							 <a className="button is-medium is-primary is-outlined is-mobile" onClick=
// 							{e => this.deleteItem(e, item)} type="submit" value="edit item">
// 							 Delete
// 							 </a>
// 						 </div>
// 					 </form>
// 					}
			
				
						
// 				</div>
// 		)})}
// 	</div>
// 	)
// }
// }
// --------------------------------------------------------------- //
// -- VERSION 2.0 render() CODE ENDS -- //
