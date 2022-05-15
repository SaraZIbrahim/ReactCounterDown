import styled from 'styled-components';

const StyledSidebar = styled.div`
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
}

/* Individual item */
.bm-item {
  display: inline-block;

  color: #d1d1d1;
  margin-bottom: 10px;
  text-align: left;
  text-decoration: none;
  transition: color 0.2s;
}

.bm-item:hover {
  color: #ffffff;
}

.bm-burger-bars {
  background: #373a47;
}

.bm-burger-bars-hover {
  background: #a90000;
}

.bm-cross-button {
  height: 24px;
  width: 24px;
}

.bm-cross {
  background: #bdc3c7;
}

.bm-menu-wrap {
    position: fixed;
    left: 0px;
    z-index: 1100;
    width: 300px;
    height: 100%;
    transition: all 0.5s ease 0s;
}

.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
  overflow: hidden!important;
}

.bm-morph-shape {
  fill: #373a47;
}

.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

.bm-item {
  display: inline-block;
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
`

export default StyledSidebar;