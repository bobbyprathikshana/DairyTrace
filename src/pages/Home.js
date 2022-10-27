import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from '../components/Navbar/NavbarElements';


class Home extends Component {

render() {
return (


 <div style={{   backgroundImage:`url("https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.tessol.in/wp-content/uploads/2022/03/3-1170x650.jpg")` ,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
		backgroundColor: 'rgb(0,0,0)',
		  backgroundColor:                'rgba(0,0,0, 0.01)',
		  color:                          'white',
		  border:                         '3px solid #f1f1f1',
		  position:                       'absolute',
		  width:                          '97.7%',
		  height:                         '90vh',
		  textAlign:                      'left'}}>
      
		<br/>
		<br/>
        <h1  style={{ color:'black '}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dairy Trace</h1>
		<br/>
		<br/>
		<h3 style={{ color:'black '}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It’s not just about producing good milk</h3>
		<br/>
		<h5 style={{ color:'black '}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It’s about ensuring it reaches the right hands in the further steps  </h5>
		<h5 style={{ color:'black '}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of the supply chain and establishing the trust among consumers!</h5>
        <br/>
		<br/>
		<br/>
		<br/>
		
		<div style={{textAlign: 'left'}}>
	   <h6 style={{ color:'black '}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now It's your turn to make sure you get your milk from the right hands !!!
	
      
		<NavBtnLink to='/Purchase' > Purchase</NavBtnLink>
		</h6>
		
		
      </div>
      </div>
    );
  
}
}

export default Home;





