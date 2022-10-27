import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class Farmer extends Component {

render() {
return (
 <div id="content">
      <br/>
      
        <h2>Farmer Information</h2>
        <br/>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          const cowhealth = this.productCowHealth.value
          const milktime = this.productMilkTime.value
          const condition = this.productCondition.value
          const certi = this.productCertification.value
		  
          this.props.createProduct(name, price, cowhealth, milktime, condition, certi)
          this.props.createOwner(price)
        }}>
        <Row>
        <div className="col-md-6">
        <h3>Cow Details</h3>
          <div className="form-group mr-sm-4">
            <input
              id="CowBreed"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Cow Breed"
              required />
          </div>
		   <br/>
          <div className="form-group mr-sm-4">
            <input
              id="CowHealth"
              type="text"
              ref={(input) => { this.productCowHealth = input }}
              className="form-control"
              placeholder="Health Status"
              required />
          </div>
		   <br/>
		  <div className="form-group mr-sm-4">
            <input
              id="FarmCertificate"
              type="text"
              ref={(input) => { this.productCertification = input }}
              className="form-control"
              placeholder=" Certificate Id"
              required />
          </div>
        </div>

        <div className="col-md-6">
          <h3>Milk Details</h3>
            <div className="form-group mr-sm-4">
            <input
              id="LactationTime"
              type="text"
              ref={(input) => { this.productMilkTime = input }}
              className="form-control"
              placeholder="Milked Time"
              required />
          </div>
		   <br/>
          <div className="form-group mr-sm-4">
            <input
              id="MilkPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Price"
              required />
          </div>
		   <br/>
		  <div className="form-group mr-sm-4">
            <input
              id="FarmCondition"
              type="text"
              ref={(input) => { this.productCondition = input }}
              className="form-control"
              placeholder="Condition"
              required />
			  
          <br/>
          </div>
          </div>

          </Row>
          <button type="submit" className="btn btn-primary">Add Details</button>
        </form>
        <p>&nbsp;</p>
        <h2>Buy Milk</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Milk Id</th>
              <th scope="col">Cow Breed</th>
              <th scope="col">Cow Health</th>
              <th scope="col">Milk Time</th>
              <th scope="col">Milk Price</th>
              <th scope="col">Milk Condition</th>
              <th scope="col">Certification Id</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
		  {this.props.products.map((product, key) => {
			  return(
			  <tr key={key}>
				  <th scope="row"> {product.id.toString()}</th>
				  <td> {product.name}</td>
				  <td> {product.cowhealth}</td>
				  <td> {product.milktime}</td>
				  <td> {window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth </td>
				  <td> {product.condition}</td>
				  <td> {product.certi}</td>
				  <td> {product.owner}</td>
				  
			  </tr>
			) 
		  })}
            
            
          </tbody>
        </table>
      </div>
    );
  
}
}

export default Farmer;

