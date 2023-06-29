import React from "react";
import {FaPlusCircle} from "react-icons/fa";
const Header = () => {
    return ( 
    <div 
        className='header'>
          <h1>Task list</h1>
        <div className='counter-task'>
          <h3>Completed: 2</h3>
          <h3>Pending: 1</h3>
        </div>
        <div className='add-task'>
          <h3>Add task</h3>
        </div>
    </div>
     );
};
export default Header;