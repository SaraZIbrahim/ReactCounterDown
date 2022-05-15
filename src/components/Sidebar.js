import React from 'react';
import { bubble  as Menu } from 'react-burger-menu';
import StyledSidebar from './styles/Sidebar.styled'

export default Sidebar => {
  return (
      <StyledSidebar>
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="#">
        About Us
      </a>
      <a className="menu-item" href="#">
        Projects
      </a>
      <a className="menu-item" href="#">
        Contact Us
      </a>
    </Menu>
    </StyledSidebar>
  );
};