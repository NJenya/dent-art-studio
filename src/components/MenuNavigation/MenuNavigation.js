import React from 'react'
import {NavLink} from "react-router-dom"

const MenuNavigation = () => {
  return (
      <nav>
        <div>
          <NavLink to='#'>Главная</NavLink>
        </div>
      </nav>
  );
};

export default MenuNavigation;
