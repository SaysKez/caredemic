import React from 'react';
import {Divider, Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Banner from './components/Banner'
import Heading from './components/Heading'
import Ideas from './components/Ideas'

function App() {
  return (
    <div className="App">
      <Container>
        <Banner />
        <Heading />
        <Divider />
        <Ideas />
      </Container>
    </div>
  );
}

export default App;
