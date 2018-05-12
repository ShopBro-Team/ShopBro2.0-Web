
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

	{/* // 	{/* {showInputField
					// 	? <h1>Rosie</h1>
					// 	: <h1>Annika</h1>
          // } */} 
          
          <div>
          <button onClick={this.toggleForm}>BUTTON</button>
          </div>	
