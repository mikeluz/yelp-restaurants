import React from 'react';
import axios from 'axios';

import RestaurantsTable from './RestaurantsTable';

// styles
import styles from '../utils/styles.js';

import store from '../store';

class Restaurants extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: "",
      offset: 0
    };
  }

  handleChange(evt) {
    if (evt.target.value.length > 3) {
      axios.get(`/api/restaurants/${evt.target.value}/${this.state.offset}`)
        .then(res => {    
          store.dispatch({
            type: "SET_RESTAURANTS", 
            restaurants: res.data
          });
        });
      this.setState({
        city: evt.target.value
      });
    }
  }

  handleClick() {
    var offsetValue = this.state.offset + 20;
      axios.get(`/api/restaurants/${this.state.city}/${offsetValue}`)
        .then(res => {    
          store.dispatch({
            type: "SET_RESTAURANTS", 
            restaurants: res.data
          });
        });
    this.setState({
      offset: this.state.offset + 20
    });
  }

  render() {
    return (
      <div id="inputContainer" style={styles.inputContainerStyle}>
      <h1>ARE THEY OPEN?</h1>
      <h3>{Date()}</h3>
      <h1>ENTER CITY, STATE (or ZIP CODE)</h1>
      <input onChange={this.handleChange.bind(this)}></input>
      <br/>
      <button onClick={this.handleClick.bind(this)}>MORE</button>
      <br/>
      {
        this.props.restaurants && <RestaurantsTable restaurants={this.props.restaurants} />
      }
      </div>
    )
  }
}

import {connect} from 'react-redux';

export default connect(
  ({restaurants}) => ({
    restaurants: restaurants
  }), {},
)(Restaurants)