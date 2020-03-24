import React, {Component} from 'react';
import View from './components/View';

require('dotenv').config()

class App extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
          <div className="App">
            <View />
          </div>
        );
    }
}

export default App;