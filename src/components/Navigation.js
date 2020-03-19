import React from 'react';
import { NavLink } from 'react-router-dom';
import stylesheet from './components.css'
 
const Navigation = () => {
    return (
       <div class='nav_bar'>
          <NavLink to="/">Home</NavLink>
          <NavLink to='/New_Reminder'>New Reminder</NavLink>
       </div>
    );
}
 
export default Navigation;