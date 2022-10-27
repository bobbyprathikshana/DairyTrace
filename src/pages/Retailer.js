import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class Retailer extends Component {

render() {
return (
 <div id="content">
      <br/>
      
        <h2>Retailer Information</h2>
        <br/>
        <form onSubmit={(event) => {
          event.preventDefault()
          const rename = this.retailerName.value
          const reprice = window.web3.utils.toWei(this.retailerPrice.value.toString(), 'Ether')
          const reloc = this.retailerLoc.value
          const recondi = this.retailerCondition.value
          const retime = this.retailerTime.value
          const recerti = this.retailerCertification.value
          this.props.createRetailer(rename, reprice, reloc,recondi, recerti, retime)
        }}>
        <Row>
        <div className="col-md-4">
          <div className="form-group mr-sm-4">
            <input
              id="RetailerName"
              type="text"
              ref={(input) => { this.retailerName = input }}
              className="form-control"
              placeholder="Retailer Name"
              required />
          </div>
         
          <br/>
          <div className="form-group mr-sm-4">
            <input
              id="RetailerTime"
              type="text"
              ref={(input) => { this.retailerTime = input }}
              className="form-control"
              placeholder="Purchase Time"
              required />
          </div>
          </div>

          <div className="col-md-4">
         
          <div className="form-group mr-sm-4">
            <input
              id="RetailerLocation"
              type="text"
              ref={(input) => { this.retailerLoc = input }}
              className="form-control"
              placeholder="Retailer Location"
              required />
          </div>
		  
          <br/>
          <div className="form-group mr-sm-4">
            <input
              id="RetailerCondition"
              type="text"
              ref={(input) => { this.retailerCondition = input }}
              className="form-control"
              placeholder="Milk Condition"
              required />
          </div>
          </div>
		  
          <div className="col-md-4">
         
          <div className="form-group mr-sm-4">
            <input
              id="RetailerPrice"
              type="text"
              ref={(input) => { this.retailerPrice = input }}
              className="form-control"
              placeholder="Retailer Price"
              required />
          </div>
		  
          <br/>
          <div className="form-group mr-sm-4">
            <input
              id="RetailerCertificate"
              type="text"
              ref={(input) => { this.retailerCertification = input }}
              className="form-control"
              placeholder="Certificate Id"
              required />
          <br/>
          </div>
          </div>
          </Row>
          <button type="submit" className="btn btn-primary">Add Details</button>
        </form>
        <p>&nbsp;</p>
        <h2>Registered Retailer Details</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"> Retailer Id </th>
              <th scope="col">Retailer Name </th>
              <th scope="col">Retailer Price</th>
              <th scope="col">Retailer Location</th>
              <th scope="col">Purchase Time</th>
              <th scope="col">Milk Condition</th>
              <th scope="col">Certification Id</th>
              <th scope="col">Retailer</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="retailerList">
		  {this.props.retails.map((retail, key) => {
			  return(
			  <tr key={key}>
				  <th scope="row"> {retail.reid.toString()}</th>
				  <td>{retail.rename}</td>
				  <td>{window.web3.utils.fromWei(retail.reprice.toString(), 'Ether')} Eth </td>
				  <td>{retail.reloc}</td>
				  <td>{retail.retime}</td>
				  <td>{retail.recondi}</td>
				  <td>{retail.recerti}</td>
				  <td>{retail.reowner}</td>
				 
			  </tr>
			) 
		  })}
            
            
          </tbody>
        </table>
      </div>
    );
  
}
}

export default Retailer;

