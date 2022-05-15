import React, { Component } from 'react'
import StyledHeader from './styles/Header.styled'
import Counter from './Counter'

const Header = () => {
  return (
    <StyledHeader>
        <Counter val={30} />
    </StyledHeader>
  );
}

export default Header;
