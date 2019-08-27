import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from '../Header'
import Home from '../Home'
import Header from '../Header'


const BG = styled.div`
  overflow-x:hidden;
  overflow-y:hidden;
  background : #222;
  color: #fb9fa4;
  
`

class App extends Component {
  render() {
    return (
      <BG><div>
        <Header />
        <Home />
      </div>
      </BG>
    );
  }
}
export default App