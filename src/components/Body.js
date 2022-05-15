import React, { Component } from 'react'
import Container from './styles/Container.styled'
import Sidebar from './Sidebar'
import Header from './Header';
import Footer from './Footer';

class Body extends Component {
  render(){
  return (
    <>
    <Header/>
    <Container>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <h1>Body!</h1>
    </Container>
    <Footer/>
    </>
  );
}}

export default Body;