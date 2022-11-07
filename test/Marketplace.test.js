const Marketplace = artifacts.require('./Marketplace.sol')

require('chai')
	.use(require('chai-as-promised'))
	.should()


contract('Marketplace',([deployer,farmer,processor]) => {
    let marketplace

    before(async () => {
        marketplace = await Marketplace.deployed()
    })

    describe('deployment',async () => {
        it('deploys successfully', async () => {
            const address = await marketplace.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('has a title', async () => {
            const name = await marketplace.name()
            assert.equal(name, 'Dairy supply chain traceability')
        })
    })
	
	describe('Products',async () => {
		let result, productCount
		
        before(async () => {
        result = await marketplace.createProduct('Jersey',web3.utils.toWei('1','Ether'),'Good','5.30 AM','Coimbatore','Yes',{from: farmer})
		productCount = await marketplace.productCount()
		})


        it('creates products', async () => {
			//success
			assert.equal(productCount,1)
			const event = result.logs[0].args
			assert.equal(event.id.toNumber(), productCount.toNumber(), 'Id is correct')
			assert.equal(event.name, 'Jersey', 'name is correct')
			assert.equal(event.price, '1000000000000000000', 'price is correct')
			assert.equal(event.cowhealth, 'Good', 'cow health is correct')
			assert.equal(event.milktime, '5.30 AM', 'Jerseyed time is correct')
			assert.equal(event.farmloc, 'Coimbatore', 'farm location is correct')
			assert.equal(event.certi, 'Yes', 'farm is certified')
			assert.equal(event.owner, farmer, 'owner is correct')
			assert.equal(event.purchased, false, 'Purchased is correct')
			
			
			//failure
			
			await await marketplace.createProduct('',web3.utils.toWei('1','Ether'),'Good','5.30 AM','Coimbatore','Yes',{from: farmer}).should.be.rejected;
			await await marketplace.createProduct('Jersey',0,'Good','5.30 AM','Coimbatore','Yes',{from: farmer}).should.be.rejected;
			await await marketplace.createProduct('Jersey',web3.utils.toWei('1','Ether'),'','5.30 AM','Coimbatore','Yes',{from: farmer}).should.be.rejected;
			await await marketplace.createProduct('Jersey',web3.utils.toWei('1','Ether'),'Good','','Coimbatore','Yes',{from: farmer}).should.be.rejected;
			await await marketplace.createProduct('Jersey',web3.utils.toWei('1','Ether'),'Good','5.30 AM','','Yes',{from: farmer}).should.be.rejected;
			await await marketplace.createProduct('Jersey',web3.utils.toWei('1','Ether'),'Good','5.30 AM','Coimbatore','',{from: farmer}).should.be.rejected;

			
        })
		
		
		it('lists products', async () => {
			
			const product = await marketplace.products(productCount)
			//success
			assert.equal(product.id.toNumber(), productCount.toNumber(), 'Id is correct')
			assert.equal(product.name, 'Jersey', 'Name is correct')
			assert.equal(product.price,'1000000000000000000' , 'Price is correct')
			assert.equal(product.cowhealth, 'Good', 'cow health is correct')
			assert.equal(product.milktime, '5.30 AM', 'Jerseyed time is correct')
			assert.equal(product.farmloc, 'Coimbatore', 'farm location is correct')
			assert.equal(product.certi, 'Yes', 'farm is certified')
			assert.equal(product.owner, farmer, 'owner is correct')
			assert.equal(product.purchased, false, 'Purchased is correct')
        })
		
		it('sells products', async () => {
			//track farmer balance b4 prchase
			let oldfarmerBalance
			oldfarmerBalance = await web3.eth.getBalance(farmer)
			oldfarmerBalance = new web3.utils.BN(oldfarmerBalance)
						
			//success			
			result = await marketplace.purchaseProduct(productCount,{from: processor, value: web3.utils.toWei('1','Ether')})
			
			//check logs
			const event = result.logs[0].args
			assert.equal(event.id.toNumber(), productCount.toNumber(), 'Id is correct')
			assert.equal(event.name, 'Jersey', 'Name is correct')
			assert.equal(event.price, '1000000000000000000' , 'Price is correct')
      assert.equal(event.cowhealth, 'Good', 'cow health is correct')
			assert.equal(event.milktime, '5.30 AM', 'Jerseyed time is correct')
			assert.equal(event.farmloc, 'Coimbatore', 'farm location is correct')
			assert.equal(event.certi, 'Yes', 'farm is certified')
			assert.equal(event.owner, processor, 'owner is correct')
			assert.equal(event.purchased, true, 'Purchased is correct')
			
			//farmer received funds?
			let newfarmerBalance
			newfarmerBalance = await web3.eth.getBalance(farmer)
			newfarmerBalance = new web3.utils.BN(newfarmerBalance)
			
			let price
			price = web3.utils.toWei('1','Ether')
			price = new web3.utils.BN(price)
						
			const expectedBalance = oldfarmerBalance.add(price)
			assert.equal(newfarmerBalance.toString(), expectedBalance.toString())
			
			//failure
			await marketplace.purchaseProduct(99,{from: processor, value: web3.utils.toWei('1','Ether')}).should.be.rejected;
			await marketplace.purchaseProduct(productCount,{from: processor, value: web3.utils.toWei('0.5','Ether')}).should.be.rejected;
			await marketplace.purchaseProduct(productCount,{from: deployer, value: web3.utils.toWei('1','Ether')}).should.be.rejected;
			await marketplace.purchaseProduct(productCount,{from: processor, value: web3.utils.toWei('1','Ether')}).should.be.rejected;
			
        })
    })
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})