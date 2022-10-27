import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class ProcessOwner extends Component {

render() {
return (
 <div id="content">
      <br/>
      
        <h2>Processor Information</h2>
        <br/>
        <form onSubmit={(event) => {
          event.preventDefault()
          const proname = this.processorName.value
          const proprice = window.web3.utils.toWei(this.processorPrice.value.toString(), 'Ether')
          const procondition = this.processorProCon.value
          const protime = this.processorProTime.value
          const proloc = this.processorProLoc.value
          const procerti = this.processorCertification.value
          this.props.createProcessor(proname, proprice, proloc, procondition, procerti, protime)
        }}>
        <Row>
        <div className="col-md-4">
          <div className="form-group mr-sm-4">
            <input
              id="ProcessorName"
              type="text"
              ref={(input) => { this.processorName = input }}
              className="form-control"
              placeholder="Processor Name"
              required />
          </div>
		  
          <br/>
		  
         <div className="form-group mr-sm-4">
		  <input
              id="ProcessorTime"
              type="text"
              ref={(input) => { this.processorProTime = input }}
              className="form-control"
              placeholder="Purchase Time"
              required />
          </div>
          
		
          </div>

          <div className="col-md-4">
         
          <div className="form-group mr-sm-4">
            <input
              id="ProcessorLocation"
              type="text"
              ref={(input) => { this.processorProLoc = input }}
              className="form-control"
              placeholder="Processor Location"
              required />
          </div>
		  
          <br/>
		  <div className="form-group mr-sm-4">
            <input
              id="ProcessorCond"
              type="text"
              ref={(input) => { this.processorProCon = input }}
              className="form-control"
              placeholder="Milk Condition"
              required />
          </div>

         
          </div>
		   <div className="col-md-4">
		   <div className="form-group mr-sm-4">
            <input
              id="ProcessorPrice"
              type="text"
              ref={(input) => { this.processorPrice = input }}
              className="form-control"
              placeholder="Processor Price"
              required />
          </div>
		  
          <br/>
		  
		    <div className="form-group mr-sm-4">
            <input
              id="ProcessorCertificate"
              type="text"
              ref={(input) => { this.processorCertification = input }}
              className="form-control"
              placeholder=" Certificate Id"
              required />
			  
          <br/>
          </div>
	
          </div>
		  
          </Row>
          <button type="submit" className="btn btn-primary">Add Details</button>
        </form>
        <p>&nbsp;</p>
        <h2>Registered Processing Owner Details</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Processor Id</th>
              <th scope="col">Processor Name</th>
              <th scope="col">Processor Price</th>
              <th scope="col">Processor Location</th>
              <th scope="col">Purchase Time</th>
              <th scope="col">Milk Condition</th>
              <th scope="col">Certification Id</th>
              <th scope="col">Processor</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="processorList">
		  {this.props.processors.map((processor, key) => {
			  return(
			  <tr key={key}>
				  <th scope="row"> {processor.proid.toString()}</th>
				  <td>{processor.proname}</td>
				  <td>{window.web3.utils.fromWei(processor.proprice.toString(), 'Ether')} Eth </td>
				  <td>{processor.proloc}</td>
				  <td>{processor.protime}</td>
				  <td>{processor.procondition}</td>
				  <td>{processor.procerti}</td>
				  <td>{processor.proowner}</td>
				 
			  </tr>
			) 
		  })}
            
            
          </tbody>
        </table>
      </div>
    );
  
}
}

export default ProcessOwner;

