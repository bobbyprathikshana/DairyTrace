import React, { Component } from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';


class Navbar extends Component {

  render() {
return (
	<>
	<Nav>
	 
      

		<NavMenu>
		<NavLink to='/' activeStyle>
		 <h1
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          target="_blank"
          rel="noopener noreferrer"
          style = {{color:'white'}}
        >
          DairyChain Trace
        </h1>
       </NavLink>
		<NavLink to='/Farmer' activeStyle>
			Farmer
		</NavLink>
		<NavLink to='/ProcessOwner' activeStyle>
			Process Owner
		</NavLink>
		<NavLink to='/Distributor' activeStyle>
			Distributor
		</NavLink>
		<NavLink to='/Retailer' activeStyle>
			Retailer
		</NavLink>
		<NavLink to='/Qrgenerator' activeStyle>
			Qrgenerator
		</NavLink>
		<NavLink to='/QrContainer' activeStyle>
			QrTrace
		</NavLink>
		
		</NavMenu>
		
	</Nav>
	</>
);
};
}
export default Navbar;
