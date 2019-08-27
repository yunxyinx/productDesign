import React, { Component } from 'react';
import styled from 'styled-components'

const Img = styled.img`
  transform: matrix(1, 0, 0, 1, 0, 0);
  width: 50%;
  height: auto;
`
const Head = styled.div`
  font-size: 14px;
`
class App extends Component {
  render() {
    return (
      <div className="container">
        <Head><h1>PRODUCT</h1></Head>
        <Head><h1> DESIGN</h1></Head>
        <Img src="static/img/home1.jpg" alt="">
        </Img>
      </div>
    );
  }
}
export default App