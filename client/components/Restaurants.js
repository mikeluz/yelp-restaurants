import React from 'react';
import axios from 'axios';

import RestaurantsTable from './RestaurantsTable';

// styles
import styles from '../utils/styles.js';

// utils
import {getCurrentTime} from '../utils/utils.js';

import store from '../store';

class Restaurants extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: "ENTER CITY AND STATE, OR ZIP CODE",
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

  locate() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    var geo = navigator.geolocation;
    var coors = geo.getCurrentPosition(pos => {
      axios.get(`/api/restaurants/coords/${pos.coords.latitude}/${pos.coords.longitude}`)
        .then(res => {    
          store.dispatch({
            type: "SET_RESTAURANTS", 
            restaurants: res.data
          });
          this.setState({
            city: res.data.businesses[0].location.city
          });
        });
    }, null, options);
  }

  render() {
    return (
      <div id="inputContainer" style={styles.inputContainerStyle}>
        <h1 id="time">It's {getCurrentTime()} -- Hungry? Find a restaurant!</h1>
        <input 
        onChange={this.handleChange.bind(this)}
        placeholder={this.state.city}
        ></input>
        <br/>
        <button onClick={this.locate.bind(this)}>FIND ME</button>
        {
          this.state.offset > 0 && <button onClick={this.handleBack.bind(this)}>BACK</button>
        }
        {
          this.props.restaurants && <button onClick={this.handleClick.bind(this)}>MORE</button>
        }
        {
          this.props.restaurants && <RestaurantsTable restaurants={this.props.restaurants} />
        }
        <br/>
      </div>
    )
  }
}

import {connect} from 'react-redux'

export default connect(
  ({restaurants}) => ({
    restaurants: restaurants
  }), {}
)(Restaurants)