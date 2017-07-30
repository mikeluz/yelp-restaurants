import React from 'react';

import styles from '../utils/styles.js';

const RestaurantsTable = ({restaurants}) => (

	<table id="restaurant-table" style={styles.table}>
	<thead>
	  <tr>
	    <th>Name</th>
	    <th>Address</th>
	    <th>Phone Number</th>
	    <th>Rating</th>
	    <th>Price</th> 
	  </tr>
  </thead>
  <tbody>
  {
  	restaurants.businesses.map(restaurant => (
		  <tr key={restaurant.id}>
		    <td><a href={restaurant.url}>{restaurant.name}</a></td>
		    <td>{restaurant.location.address1}</td>
		    <td>{restaurant.phone}</td>
		    <td>{restaurant.rating}</td> 
		    <td>{restaurant.price}</td>
		  </tr>
  	))
  }
  </tbody>
	</table>

);


export default RestaurantsTable;