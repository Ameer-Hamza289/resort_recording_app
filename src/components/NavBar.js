import React from 'react';
 import logo from '../images/logo.svg';
import { FaAlignRight } from "react-icons/fa";
import {Link} from 'react-router-dom';

import  { Component } from 'react'

 class NavBar extends Component {
  state={
            isOpen : false
        };
  handleToggle=()=>{
      this.setState({isOpen:!this.state.isOpen})
  };

  render() {
    return (
      <navbar className="navbar"> 
        <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort"/>
          </Link>
          <button type='button' className='nav-btn' onClick={this.handleToggle}>
            <FaAlignRight className="nav-icon"/>
            
          </button> 
        </div>
        <ul className={this.state.isOpen? "nav-links show-nav":"nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/room">Rooms</Link>
        </li>
        </ul>
        </div>
              
      </navbar>
    )
  }
}

export default NavBar;

//  const NavBar = () => {
//     state={
//         isOpen : false
//     }
//     handleToggle=()=>{
//         setState({isOpen:!state.isOpen})
//     }
//     // const [value,setValue]=useState();
    
//   return (
//     <navbar className="navbar"> 
//         <div className="nav-center"></div>
//         <div className="nav-header"></div>
//         <Link to="/">
//             <img src={logo} alt="Beach Resort"/>
//         </Link>

//     </navbar>
//   )
// }
// export default NavBar;