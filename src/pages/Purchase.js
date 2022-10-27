import React, { Component } from 'react';

import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from '../components/Navbar/NavbarElements';


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class Purchase extends Component {

render() {
return (
<div>
 <div id="content"  >
		
 </div>
 <div style={{   
  backgroundColor: 'rgb(0,0,0)',
  backgroundColor:                'rgba(0,0,0, 0.01)',
  color:                          'white',
  border:                         '3px solid #f1f1f1',
  position:                       'absolute',
  width:                          '97.7%',
  textAlign:                      'left'}}>
      
        <h2  style={{ color:'black '}}>Currently Available</h2>
        <table className = "table"  style={{ color:'black'}}>
          <thead>
            <tr>
              <th scope="col">Milk Id</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="OwnerList">
		   
		  {this.props.ownerroles.map((ownerrole, key) => {
			  return(
			  
			  <tr key={key}>
				  <th scope="row"> {ownerrole.id.toString()}</th>
				  <td>{window.web3.utils.fromWei(ownerrole.price.toString(), 'Ether')} Eth </td>
				  <td>Farmer: {ownerrole.Fowner}, <br/>
				  Process Owner: {ownerrole.Powner},<br/> 
				  Distributor: {ownerrole.Downer},  <br/>
				  Retailer: {ownerrole.Rowner} </td>
				  <td>
				  {ownerrole.Powner == '0x0000000000000000000000000000000000000000' && ownerrole.Downer == '0x0000000000000000000000000000000000000000'  && ownerrole.Rowner == '0x0000000000000000000000000000000000000000' ? <NavLink to='/ProcessOwner' activeStyle>
				  
		
				   <button 
				   name={ownerrole.id}
					value={ownerrole.price}
					onClick = {(event) => {
						this.props.purchaseProduct(event.target.name, event.target.value)
					}}
					
					>
						Purchase
					</button>
					</NavLink>
					: (ownerrole.Downer == '0x0000000000000000000000000000000000000000'  && ownerrole.Rowner == '0x0000000000000000000000000000000000000000' ? <NavLink to='/Distributor' activeStyle>
				  
		
				   <button 
					name={ownerrole.id}
					value={ownerrole.price}
					onClick = {(event) => {
						this.props.purchaseProduct(event.target.name, event.target.value)
					}}
					>
						Purchase
					</button>
					</NavLink>
					:<NavLink to='/Retailer' activeStyle>				  
		
				   <button 
				   name={ownerrole.id}
					value={ownerrole.price}
					onClick = {(event) => {
						this.props.purchaseProduct(event.target.name, event.target.value)
					}}>
						Purchase
					</button>
				  </NavLink> )}
				  </td>
				 
				  			  </tr>
			) 
		  })}
            
            
          </tbody>
        </table>
      </div>
      </div>
    );
  
}
}

export default Purchase;





