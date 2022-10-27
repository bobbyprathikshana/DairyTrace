import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class Distributor extends Component {

render() {
return (
 <div id="content">
      <br/>
      
        <h2>Distributor Information</h2>
        <br/>
        <form onSubmit={(event) => {
          event.preventDefault()
          const disname = this.distributeName.value
          const disprice = window.web3.utils.toWei(this.distributePrice.value.toString(), 'Ether')
          const disloc = this.distributeDisLoc.value
          const discerti = this.distributeCertification.value
          const discondi = this.distributeCondition.value
          const distime = this.distributeTime.value
          this.props.createDistribute(disname, disprice, disloc, discondi, discerti, distime)
        }}>
        <Row>
        <div className="col-md-4">
          <div className="form-group mr-sm-4">
            <input
              id="DistributorName"
              type="text"
              ref={(input) => { this.distributeName = input }}
              className="form-control"
              placeholder="Distributor Name"
              required />
          </div>
          <br/>
          <div className="form-group mr-sm-4">
            <input
              id="DistributorTime"
              type="text"
              ref={(input) => { this.distributeTime = input }}
              className="form-control"
              placeholder="Purchase Time"
              required />
          </div>
          </div>

          <div className="col-md-4">
         
          <div className="form-group mr-sm-4">
            <input
              id="DistributorLocation"
              type="text"
              ref={(input) => { this.distributeDisLoc = input }}
              className="form-control"
              placeholder="Distributor Location"
              required />
          </div>
		  <br/>
          <div className="form-group mr-sm-4">
            <input
              id="DistributorCondition"
              type="text"
              ref={(input) => { this.distributeCondition = input }}
              className="form-control"
              placeholder=" Milk Condition"
              required />
          </div>
		  
          </div>
          <div className="col-md-4">
         
          <div className="form-group mr-sm-4">
            <input
              id="DistributorPrice"
              type="text"
              ref={(input) => { this.distributePrice = input }}
              className="form-control"
              placeholder="Distributor Price"
              required />
          </div>
		   <br/>
          <div className="form-group mr-sm-4">
            <input
              id="DistributorCertificate"
              type="text"
              ref={(input) => { this.distributeCertification = input }}
              className="form-control"
              placeholder=" Certificate Id"
              required />
			  <br/>
          </div>
          </div>
          </Row>
		  
		  
          <button  type="submit" className="btn btn-primary">Add Details</button>
        </form>
        <p>&nbsp;</p>
        <h2>Registered Distributor Details</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Distributor Id</th>
              <th scope="col">Distributor Name</th>
              <th scope="col">Distributor Price</th>
              <th scope="col">Distributor Location</th>
              <th scope="col">Purchase Time</th>
              <th scope="col">Milk Condition</th>
              <th scope="col">Certification Id</th>
              <th scope="col">Distributor</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="distributorList">
		  {this.props.distributes.map((distribute, key) => {
			  return(
			  <tr key={key}>
				  <th scope="row"> {distribute.disid.toString()}</th>
				  <td>{distribute.disname}</td>
				  <td>{window.web3.utils.fromWei(distribute.disprice.toString(), 'Ether')} Eth </td>
				  <td>{distribute.disloc}</td>
				  <td>{distribute.distime}</td>
				  <td>{distribute.discondi}</td>
				  <td>{distribute.discerti}</td>
				  <td>{distribute.disowner}</td>
				  </tr>
			) 
		  })}
            
            
          </tbody>
        </table>
      </div>
    );
  
}
}

export default Distributor;

