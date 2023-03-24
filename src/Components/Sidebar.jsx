import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import '../../src/sidebar.css'

// eslint-disable-next-line
export default props => {
  return (
    <Menu width={300}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};