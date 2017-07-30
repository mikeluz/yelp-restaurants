import React from 'react';
import axios from 'axios';

import Restaurants from './Restaurants';
import store from '../store';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Restaurants />
      </div>
    )
  }
}

export default App;