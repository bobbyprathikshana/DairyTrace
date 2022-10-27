import "./styles.css";
import { useState } from "react";
import QrReader from "react-qr-reader";

import { Accordion, AccordionItem } from "react-sanfona";

import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class QrContainer extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
      selected: " Product Id ",
	  startScan: false,
	  loadingScan: false,
	  data:""
    };
	this.handleError = this.handleError.bind(this);
    this.handleScan = this.handleScan.bind(this);
  }
handleScan(scanData) {
    this.setState({
	loadingScan: true });
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      this.setState({
      data: scanData,
	  startScan: false,
	  loadingScan: false
	  });
	  
    }
  };
  handleError(err) {
    console.error(err);
  };
  
  render() {
  return (
    <div className="QrContainer">
      <h2>
        Scan the QR here for 
        {this.state.selected}
      </h2>
	  

      <button 
        onClick={() => {
          this.setState({
	startScan: (!this.state.startScan) });
        }}
      >
        {this.state.startScan ? "Stop Scan" : "Start Scan"}
      </button>
	  
      {this.state.startScan && (
        <>
          <select onChange={(e) =>  {
          this.setState({
	selected: (e.target.value) });
        }}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
          </select>
          <QrReader
            facingMode={this.state.selected}
            delay={10}
            onError={this.handleError}
            onScan={this.handleScan}
            // chooseDeviceId={()=>selected}
            style={{ width: "300px" }}
          />
        </>
			)}
			
        <h3>Trace Details </h3>
	{this.props.ownerroles.filter((ownerrole) => ownerrole.id == this.state.data).map((ownerrole, key) => {
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
				  
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Certification Id :</dt><dd> {product.certi}</dd>
				  		 <Accordion>
       
            <AccordionItem style={{fontSize:'5px'}}title={<h6>View Details </h6>} expanded={1 === 0}>
			<br/>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Milked Time        :</dt><dd> {product.milktime}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Milk Price         :</dt><dd> {window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth </dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Milk Condition      :</dt><dd> {product.condition}</dd>			
            </AccordionItem>
        
      </Accordion>
			  </dl>
			  ) 
		  })}
        </Card.Text>

        
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
				  
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Certification Id :</dt><dd> {processor.procerti}</dd>
				   <Accordion>
       
            <AccordionItem title={`View Details `} expanded={1 === 0}>
			<br/>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Milk Condition             :</dt><dd> {processor.procondition}</dd>
				  <dt style={{float:'left',clear:'left',marginRight:'5px'}}>Purchase Time              :</dt><dd> {processor.protime}</dd>		
            </AccordionItem>
        
      </Accordion>
			  </dl>
			  ) 
		  })}
        </Card.Text>
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
      </Card.Body>
    </Card>
</Col>	
	</Row>
	
	) 
		  }
		  
		  
		  )}
	
	<br/>
	
	
        
    </div>
  )
}
}
export default QrContainer;
