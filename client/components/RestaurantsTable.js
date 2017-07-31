import React from 'react';

// styles
import styles from '../utils/styles.js';

// utils
import {sort} from '../utils/utils.js';

class RestaurantsTable extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sortDirection: ""
		}
	}

	handleSortClick(evt) {
		sort(this.props.restaurants.businesses, evt.target.innerText.toLowerCase(), this.state.sortDirection);
		if (this.state.sortDirection === "") {
			this.setState({
				sortDirection: "asc"
			});
		} else {
			this.setState({
				sortDirection: ""
			});
		}
	}

	render() {
		return (
			<table id="restaurant-table" style={styles.table}>
			<thead id="table-header">
			  <tr>
			    <th>Name</th>
			    <th>Address</th>
			    <th>Phone Number</th>
			    <th className="sortable"><a onClick={this.handleSortClick.bind(this)}>Rating</a></th>
			    <th className="sortable"><a onClick={this.handleSortClick.bind(this)}>Price</a></th>
			    <th>Open?</th>
			  </tr>
		  </thead>
		  <tbody>
		  {
		  	this.props.restaurants.businesses.map(restaurant => (
				  <tr key={restaurant.id}>
				    <td><a href={restaurant.url}>{restaurant.name}</a></td>
				    <td>{restaurant.location.address1}</td>
				    <td>{restaurant.display_phone}</td>
				    <td>{restaurant.rating}</td> 
				    <td>{restaurant.price}</td>
				    <td>{restaurant.is_closed ? "NO" : "YES" }</td>
				  </tr>
		  	))
		  }
		  </tbody>
			</table>
		)
	}
}

export default RestaurantsTable;