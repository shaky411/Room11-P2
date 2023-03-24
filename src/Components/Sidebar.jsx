import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import '../../src/sidebar.css'

// eslint-disable-next-line
export default props => {
  return (
    <div>
    <Menu width={300}>
      <a className="menu-item" href="/"><i class="fa-solid fa-house-chimney mr-4"></i>
        Home
      </a>
      <a className="menu-item" href="/about"><i class="fa-solid fa-circle-info mr-4"></i>
        About
      </a>
      <a className="menu-item" href="/contact"><i class="fa-regular fa-address-book mr-4"></i>
        Contact
      </a>
    </Menu>
    </div>
  );
};