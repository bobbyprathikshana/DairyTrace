import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Farmer from './pages/Farmer';
import ProcessOwner from './pages/ProcessOwner';
import Distributor from './pages/Distributor';
import Retailer from './pages/Retailer';
import Consumer from './pages/Consumer';
import Purchase from './pages/Purchase';
import Qrgenerator from './pages/Qrgenerator';
import QrContainer from './pages/QrContainer';
// import Retailer from './pages/Retailer';
// import Consumer from './pages/Consumer';
// import Admin from './pages/Admin';




import Web3 from 'web3'
// import logo from './logo.png';

import Marketplace from './abis/Marketplace.json'

// import Main from './Main'



class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()

  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
       }
      else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      }        
      else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    }

  async loadBlockchainData(){ 
    const web3 = window.web3

    //load acc
    const accounts =  await web3.eth.getAccounts()

    this.setState({ account: accounts[0] })
    const networkId=await web3.eth.net.getId()
    const networkData=Marketplace.networks[networkId]
    if(networkData) {
      const marketplace = web3.eth.Contract(Marketplace.abi,networkData.address)
      this.setState({marketplace: marketplace })
      const productCount = await marketplace.methods.productCount().call()
      const ownerCount = await marketplace.methods.ownerCount().call()
      const processorCount = await marketplace.methods.processorCount().call()
      const distributeCount = await marketplace.methods.distributeCount().call()
      const retailerCount = await marketplace.methods.retailerCount().call()
      // console.log(processorCount.toString())
      console.log(ownerCount.toString())
      console.log(productCount.toString())
      console.log(retailerCount.toString())
      // console.log(distributeCount.toString())
      
      this.setState({productCount})
      this.setState({ownerCount})
      this.setState({processorCount})
      this.setState({distributeCount})
      this.setState({retailerCount})
	  
      //load prods
      for (var i=1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call()
        this.setState({
          products: [...this.state.products, product]
        })
		console.log(product)
		      
	}
	for (var n=1; n <= ownerCount; n++) {
        const ownerrole = await marketplace.methods.ownerroles(n).call()
        this.setState({
          ownerroles: [...this.state.ownerroles, ownerrole]
		  
        })
		console.log(ownerrole)
		      
	}
	  for (var j=1; j <= processorCount; j++) {
        const processor = await marketplace.methods.processors(j).call()
        this.setState({
          processors: [...this.state.processors, processor]
        })
      }
	  for (var k=1; k <= distributeCount; k++) {
        const distribute = await marketplace.methods.distributes(k).call()
        this.setState({
          distributes: [...this.state.distributes, distribute]
        })
      }

	  for (var l=1; l <= retailerCount; l++) {
        const retail = await marketplace.methods.retails(l).call()
        this.setState({
          retails: [...this.state.retails, retail]
        })
      }
	  	  
      this.setState({loading: false })
	  
      
    } 
    else {
      window.alert('Contract not deployed to detected network.');
    }
    
  }

  constructor(props) {
    super(props)
    this.state = { 
      account: '',
      productCount: 0,
      products: [], 
      ownerCount: 0,
      ownerroles: [], 
	  processorCount: 0,
      processors: [],
	  distributeCount: 0,
      distributes: [],
	  retailerCount: 0,
      retails: [],
      loading: true
    }

    this.createProduct = this.createProduct.bind(this)
    this.createOwner = this.createOwner.bind(this)
	
    this.purchaseProduct = this.purchaseProduct.bind(this)
	
    this.createProcessor = this.createProcessor.bind(this)
	
    this.createDistribute = this.createDistribute.bind(this)
	
	this.createRetailer = this.createRetailer.bind(this)
	
	console.log(Array.isArray(this.state.ownerroles) ? "true": "false");
	console.log((this.state.ownerroles));
	console.log((this.state.products));
	console.log(Array.isArray(this.state.products) ? "true": "false");
	
  }

  createProduct(name, price, cowhealth, milktime, condition, certi) {
    this.setState({ loading:true })
    this.state.marketplace.methods.createProduct(name, price, cowhealth, milktime, condition, certi).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading:false })
    })
  }
    
  createOwner(price) {
    this.setState({ loading:true })
    this.state.marketplace.methods.createOwner( price).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading:false })
    })
  }
  
  createProcessor(proname, proprice, proloc, procondition, procerti, protime) {
    this.setState({ loading:true })
    this.state.marketplace.methods.createProcessor(proname, proprice, proloc, procondition, procerti, protime).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading:false })
    })
  }
  
  createDistribute(disname, disprice, disloc, discondition, discerti, distime) {
    this.setState({ loading:true })
    this.state.marketplace.methods.createDistribute(disname, disprice, disloc, discondition, discerti, distime).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading:false })
    })
  }

  createRetailer(rename, reprice, reloc, recondition, recerti, retime) {
    this.setState({ loading:true })
    this.state.marketplace.methods.createRetailer(rename, reprice, reloc, recondition, recerti, retime).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading:false })
    })
  }
    
  purchaseProduct(id, price) {
    this.setState({ loading:true })
    this.state.marketplace.methods.purchaseProduct(id).send({ from: this.state.account,value:price})
    .once('receipt', (receipt) => {
      this.setState({ loading:false })
    })
}

 render() {
return (

	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<home role="home" className="col-lg-12 d-flex">
									  { <Home 
										  ownerroles={this.state.ownerroles} 
										  products={this.state.products} 
										  createProduct={this.createProduct}
										  createOwner={this.createOwner}
										  purchaseProduct={this.purchaseProduct} /> 
										  }
										</home>}/>
		
		<Route path='/Farmer' element={<farmer role="farmer" className="col-lg-12 d-flex">
									  { <Farmer 
										  products={this.state.products} 
										  ownerroles={this.state.ownerroles} 
										  createProduct={this.createProduct}
										  createOwner={this.createOwner}
										  purchaseProduct={this.purchaseProduct} /> 
										  }
										</farmer>} />
										
		<Route path='/ProcessOwner' element={<processowner role="processowner" className="col-lg-12 d-flex">
									  {  <ProcessOwner
										  processors={this.state.processors} 
										  createProcessor={this.createProcessor}/> 
										  }
										</processowner>} />								
		<Route path='/Distributor' element={<distributor role="distributor" className="col-lg-12 d-flex">
									  {  <Distributor
										  distributes={this.state.distributes} 
										  createDistribute={this.createDistribute} /> 
										  }
										</distributor>} />
										
		<Route path='/Retailer' element={<retailer role="retailer" className="col-lg-12 d-flex">
									  {  <Retailer
										  retails={this.state.retails} 
										  createRetailer={this.createRetailer} /> 
										  }
										</retailer>} />		
																						
		<Route path='/Purchase' element={<purchase role="purchase" className="col-lg-12 d-flex">
									  {  <Purchase
										  ownerroles={this.state.ownerroles} 
										  products={this.state.products} 
										  createProduct={this.createProduct}
										  createOwner={this.createOwner}
										  purchaseProduct={this.purchaseProduct}
										  /> 
										  }
										</purchase>} />									
		<Route path='/Qrgenerator' element={<qrgenerator role="qrgenerator" className="col-lg-12 d-flex">
									  {  <Qrgenerator
										  /> 
										  }
										</qrgenerator>} />
		<Route path='/QrContainer' element={<qrContainer role="qrContainer" className="col-lg-12 d-flex">
									  {  <QrContainer
										 ownerroles={this.state.ownerroles} 
										  products={this.state.products}
										  processors={this.state.processors}
										  distributes={this.state.distributes} 
										  retails={this.state.retails}
										  /> 
										  }
										</qrContainer>} />
		
	</Routes>
	</Router>

	
);

}
}
export default App;
