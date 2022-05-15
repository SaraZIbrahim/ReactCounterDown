import React, { Component } from 'react'
import StyledHeader from './styles/Header.styled'
import Counter from './Counter'

class Header extends Component {
  render(){
  return (
    <StyledHeader>
        <Counter val={30} />
    </StyledHeader>
  );
}}

export default Header;
