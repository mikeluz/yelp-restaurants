import React from 'react';
import axios from 'axios';

import RestaurantsTable from './RestaurantsTable';

// styles
import styles from '../utils/styles.js';

import store from '../store';

function getCurrentTime() {

  var today = Date();
  var time = today.toString().slice(15, 24);

  var hmsArr = time.split(":");

  if (hmsArr[0] > 12) {
    hmsArr[0] = hmsArr[0] - 12;
    return hmsArr.join(":") + " PM EST";
  } else {
    return time + " AM EST";
  }

}

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

  handleBack() {
    var offsetValue = this.state.offset - 20;
      axios.get(`/api/restaurants/${this.state.city}/${offsetValue}`)
        .then(res => {    
          store.dispatch({
            type: "SET_RESTAURANTS", 
            restaurants: res.data
          });
        });
    this.setState({
      offset: this.state.offset - 20
    });
  }

  render() {
    return (
      <div id="inputContainer" style={styles.inputContainerStyle}>
      <h1>It is now {getCurrentTime()}. Time to eat!</h1>
      <input 
      onChange={this.handleChange.bind(this)}
      placeholder="ENTER CITY AND STATE, OR ZIP CODE"
      ></input>
      <br/>
      {
        this.state.offset > 0 && <button onClick={this.handleBack.bind(this)}>BACK</button>
      }
      <button onClick={this.handleClick.bind(this)}>MORE</button>
      {
        this.props.restaurants && <RestaurantsTable restaurants={this.props.restaurants} />
      }
      <br/>
      <h1>powered by</h1>
      <div id="yelpLogo"></div>
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