import { useState } from 'react';
import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Consumer extends Component {
constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

render() {

  return (
  
  
 <div id="content">
 <br/>
 
      <h4 >Enter milk packet id</h4>
      <input
        type="text"
        name="Milk ID"
        value={this.state.searchValue}
        onChange={e => this.setState({ searchValue:e.target.value})}
      />
 
      <br/>
      <br/>
        <h4 >Trace Details :</h4>
		< br/>
	{this.props.ownerroles.filter((ownerrole) => ownerrole.id == this.state.searchValue).map((ownerrole, key) => {
			  return(
			  
		<Row key={key} >
		<Col>
	 
	<Card style={{ width: '18rem' }} >      
      <Card.Body>
        <Card.Header style={{textAlign:'center'}} ><b>FARMER</b></Card.Header>
		<br/>
        <Card.Text>
		  {this.props.products.filter((product) => product.owner == ownerrole.Fowner).map((product, key) => {
			  return(

			   <dl key={key}>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Milk Batch Id          :</dt><dd> {product.id.toString()}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Cow Breed         :</dt><dd> {product.name}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Cow Health        :</dt><dd> {product.cowhealth}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Milked Time        :</dt><dd> {product.milktime}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Milk Price         :</dt><dd> {window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth </dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Milk Condition      :</dt><dd> {product.condition}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Certification Id :</dt><dd> {product.certi}</dd>
				  
			  </dl>
			  ) 
		  })}
        </Card.Text>
        <Button style={{backgroundColor: '#007ac1',color:'white',borderRadius: 4,marginLeft: "auto" }} variant="primary">View Details</Button>
      </Card.Body>
    </Card>
</Col>
<Col>
	<Card style={{ width: '18rem' }}>      
      <Card.Body>
        <Card.Header style={{textAlign:'center'}} ><b>PROCESS OWNER</b></Card.Header>
		<br/>
        <Card.Text>
          {this.props.processors.filter((processor) => processor.proowner == ownerrole.Powner).map((processor, key) => {
			  return(

			   <dl key={key}>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Processor Id            :</dt><dd> {processor.proid.toString()}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Processor Name          :</dt><dd> {processor.proname}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Processor Price         :</dt><dd> {window.web3.utils.fromWei(processor.proprice.toString(), 'Ether')} Eth </dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Processor Location      :</dt><dd> {processor.proloc}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Milk Condition             :</dt><dd> {processor.procondition}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Purchase Time              :</dt><dd> {processor.protime}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Certification Id :</dt><dd> {processor.procerti}</dd>
				  
			  </dl>
			  ) 
		  })}
        </Card.Text>
        <Button style={{backgroundColor: '#007ac1',color:'white',borderRadius: 4,marginLeft: "auto" }} variant="primary">View Details</Button>
      </Card.Body>
    </Card>
</Col>
<Col>	
	<Card style={{ width: '18rem' }}>      
      <Card.Body>
        <Card.Header style={{textAlign:'center'}} ><b>DISTRIBUTOR</b></Card.Header>
		<br/>
        <Card.Text>
           {this.props.distributes.filter((distribute) => distribute.disowner == ownerrole.Downer).map((distribute, key) => {
			  return(

			   <dl key={key}>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Distributor Id           :</dt><dd> {distribute.disid.toString()}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Distributor Name        :</dt><dd> {distribute.disname}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Distributor Price         :</dt><dd> {window.web3.utils.fromWei(distribute.disprice.toString(), 'Ether')} Eth </dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Distributor Location      :</dt><dd> {distribute.disloc}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Distributor Certification :</dt><dd> {distribute.discerti}</dd>
				  
			  </dl>
			  
			  ) 
		  })}
        </Card.Text>
        <Button style={{backgroundColor: '#007ac1',color:'white',borderRadius: 4,marginLeft: "auto" }} variant="primary">View Details</Button>
      </Card.Body>
    </Card>
</Col>
<Col>
	<Card style={{ width: '18rem' }}>      
      <Card.Body>
        <Card.Header style={{textAlign:'center'}} ><b>RETAILER</b></Card.Header>
		<br/>
        <Card.Text>
          {this.props.retails.filter((retail) => retail.reowner == ownerrole.Rowner).map((retail, key) => {
			  return(

			   <dl key={key}>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Retailer Id            : </dt><dd style={{marginLeft:'0px'}}>{retail.reid.toString()}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Retailer Name          : </dt><dd style={{marginLeft:'0px'}}>{retail.rename}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Retailer Price         : </dt><dd style={{marginLeft:'0px'}}>{window.web3.utils.fromWei(retail.reprice.toString(), 'Ether')} Eth </dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Retailer Location      : </dt><dd style={{marginLeft:'0px'}}>{retail.reloc}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Retailer Certification : </dt><dd style={{marginLeft:'0px'}}>{retail.recerti}</dd>
				  
			  </dl>
			  ) 
		  })}
        </Card.Text>
        <Button style={{backgroundColor: '#007ac1',color:'white',borderRadius: 4,marginLeft: "auto" }} variant="primary">View Details</Button>
      </Card.Body>
    </Card>
</Col>	
	
	</Row>
	) 
		  })}
	
	<br/>
	
	
        
    </div>
  )
}
}
export default Consumer
