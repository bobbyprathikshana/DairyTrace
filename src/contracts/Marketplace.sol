pragma solidity ^0.5.0;

contract Marketplace{
  string public name;
  uint public productCount = 0;
  uint public ownerCount = 0;
  uint public processorCount = 0;
  uint public distributeCount = 0;
  uint public retailerCount = 0;
  mapping(uint => Product) public products;
  mapping(uint => Ownerrole) public ownerroles;
  mapping(uint => Processor) public processors;
  mapping(uint => Distribute) public distributes;
  mapping(uint => Retail) public retails;

  struct Product {
    uint id;
    string name;
    uint price;
    string cowhealth;
    string milktime;
    string condition;
    string certi;
    address payable owner;
  }
  
  struct Ownerrole{
	uint id;
    uint price;
    address payable Fowner;
    address payable Powner;
    address payable Downer;
    address payable Rowner;
	}

  struct Processor {
    uint proid;
    string proname;
    uint proprice;
    string proloc;
    string procondition;
    string procerti;
    address payable proowner;
	string protime;
  }
  struct Distribute {
    uint disid;
    string disname;
    uint disprice;
    string disloc;
    string discondition;
    string discerti;
    address payable disowner;
	string distime;
  }
  
   struct Retail {
    uint reid;
    string rename;
    uint reprice;
    string reloc;
    string recondition;
    string recerti;
    address payable reowner;
	string retime;
  }
  event ProductCreated(
    uint id,
    string name,
    uint price,
    string cowhealth,
    string milktime,
    string condition,
    string certi,
    address payable owner
  );
   event OwnerroleCreated(
    uint id,
    uint price,
    address payable Fowner,
    address payable Powner,
    address payable Downer,
    address payable Rowner
  );

 event ProcessorCreated(
    uint proid,
    string proname,
    uint proprice,
    string proloc,
    string procondition,
    string procerti,
    address payable proowner,
	string protime
  );
  event DistributeCreated(
    uint disid,
    string disname,
    uint disprice,
    string disloc,
    string discondition,
    string discerti,
    address payable disowner,
	string distime
  );
 
  event RetailerCreated(
    uint reid,
    string rename,
    uint reprice,
    string reloc,
    string recondition,
    string recerti,
    address payable reowner,
	string retime
  );
  
  event ProductPurchased(
    uint id,
    uint price,
    address payable Fowner,
    address payable Powner,
    address payable Downer,
    address payable Rowner
  );
  
 

  constructor() public {
    name='Dairy supply chain traceability';
  }

  function createProduct(string memory _name, uint _price, string memory _cowhealth, string memory _milktime, string memory _condition, string memory _certi) public {
    //req valid name
    require(bytes(_name).length > 0);
    //req valid price
    require(_price > 0);
    require(bytes(_cowhealth).length > 0);
    require(bytes(_milktime).length > 0);
    require(bytes(_condition).length > 0);
    require(bytes(_certi).length > 0);
    
    //make sure params are correct
    //increment prod cnt
    productCount ++;

    //create a product
    products[productCount] = Product(productCount, _name, _price, _cowhealth, _milktime, _condition, _certi, msg.sender);
	
    //trigger an event
    emit ProductCreated(productCount, _name, _price, _cowhealth, _milktime, _condition, _certi, msg.sender);

    
  }
    
	function createOwner(uint _price) public {
    //req valid price
    require(_price > 0);
   
    //make sure params are correct
    //increment prod cnt
    ownerCount ++;

    //create a product
    ownerroles[ownerCount] = Ownerrole(ownerCount, _price,  msg.sender, address(0), address(0), address(0));
    
    //trigger an event
	emit OwnerroleCreated(ownerCount, _price,  msg.sender, address(0), address(0), address(0));
    
  }
    
  function createProcessor(string memory _proname, uint _proprice, string memory _proloc, string memory _procondition, string memory _procerti, string memory _protime) public {
    //req valid name
    require(bytes(_proname).length > 0);
    //req valid price
    require(_proprice > 0);

    require(bytes(_proloc).length > 0);
    require(bytes(_procondition).length > 0);
	
    require(bytes(_protime).length > 0);
    require(bytes(_procerti).length > 0);
    
    //make sure params are correct
    //increment prod cnt
    processorCount ++;

    //create a product
    processors[processorCount] = Processor(processorCount, _proname, _proprice, _proloc, _procondition, _procerti, msg.sender,  _protime);
    
    //trigger an event
    emit ProcessorCreated(processorCount, _proname, _proprice, _proloc, _procondition, _procerti, msg.sender, _protime);
    
  }  
  
  function createDistribute(string memory _disname, uint _disprice, string memory _disloc, string memory _discondition, string memory _discerti, string memory _distime) public {
    //req valid name
    require(bytes(_disname).length > 0);
    //req valid price
    require(_disprice > 0);

    require(bytes(_disloc).length > 0);
    require(bytes(_discondition).length > 0);
	
    require(bytes(_distime).length > 0);
    require(bytes(_discerti).length > 0);
    
    //make sure params are correct
    //increment disd cnt
    distributeCount ++;

    //create a product
    distributes[distributeCount] = Distribute(distributeCount, _disname, _disprice, _disloc, _discondition, _discerti, msg.sender, _distime);
    
    //trigger an event
    emit DistributeCreated(distributeCount, _disname, _disprice, _disloc, _discondition, _discerti, msg.sender, _distime);
    
  }
 
   
  function createRetailer(string memory _rename, uint _reprice, string memory _reloc, string memory _recondition, string memory _recerti, string memory _retime) public {
    //req valid name
    require(bytes(_rename).length > 0);
    //req valid price
    require(_reprice > 0);

    require(bytes(_reloc).length > 0);
    require(bytes(_recondition).length > 0);
	
    require(bytes(_retime).length > 0);
    require(bytes(_recerti).length > 0);
    
    //make sure params are correct
    //increment disd cnt
    retailerCount ++;

    //create a product
    retails[retailerCount] = Retail(retailerCount, _rename, _reprice, _reloc, _recondition, _recerti, msg.sender, _retime);
    
    //trigger an event
    emit RetailerCreated(retailerCount, _rename, _reprice, _reloc, _recondition, _recerti, msg.sender, _retime);
    
  }
  

  function purchaseProduct(uint _id) public payable {
    //fetch product
    Ownerrole memory _ownerrole = ownerroles[_id];
	

    //valid prod?
    require(_ownerrole.id > 0 && _ownerrole.id <= ownerCount);
	
    //enough ethers?
    require(msg.value >= _ownerrole.price);
	

    if (_ownerrole.Fowner == address(0x0)){
      _ownerrole.Fowner = _ownerrole.Fowner;
      _ownerrole.Powner = address(0);
      _ownerrole.Downer = address(0);
      _ownerrole.Rowner = address(0);
      address(_ownerrole.Fowner).transfer(msg.value);
    } 
    else if (_ownerrole.Fowner != address(0) && _ownerrole.Powner == address(0)){
      _ownerrole.Powner = msg.sender;
      _ownerrole.Downer = address(0);
      _ownerrole.Rowner = address(0);
      address(_ownerrole.Fowner).transfer(msg.value);
    }
    else if (_ownerrole.Powner != address(0) && _ownerrole.Downer == address(0)){
      _ownerrole.Downer =  msg.sender;
      _ownerrole.Rowner = address(0);
      address(_ownerrole.Powner).transfer(msg.value);
    }
    else if (_ownerrole.Downer != address(0) && _ownerrole.Rowner == address(0)){
      _ownerrole.Rowner =  msg.sender;
      address(_ownerrole.Downer).transfer(msg.value);
    }
	ownerroles[_id] = Ownerrole(_ownerrole.id,  _ownerrole.price, _ownerrole.Fowner,  _ownerrole.Powner,  _ownerrole.Downer,  _ownerrole.Rowner);
    //trigger on event
    emit ProductPurchased(ownerCount, _ownerrole.price, _ownerrole.Fowner,  _ownerrole.Powner,  _ownerrole.Downer,  _ownerrole.Rowner );
    
  }
  






}
