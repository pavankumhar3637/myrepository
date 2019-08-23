const SHA256 = require ("crypto-js/sha256");
class Block
{
	constructor (timestamp, data, previousHash=" ")
	{
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		//When creating new block , automatically calculate its hash.
		this.hash = this.calculateHash();
	}	
	
	calculateHash()
	{ 
		return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data)).toString()
	};
}

class Blockchain 
{
	constructor()
	{
		this.chain = [this.createGenesisBlock()]
	}
	createGenesisBlock()
	{
		return new Block("01/08/2019", "Genesis Block", "0");
	}
	getLatestblock()
	{
		return this.chain[this.chain.length - 1];
	}
	
	addBlock(newBlock)
	{
		//the new block needs to point to the hash of the latest block on the chain
		newBlock.previousHash = this.getLatestblock().hash;
		//calculate the hash of the new block
		newBlock.hash = newBlock.calculateHash();
		//Now the block is ready and can be added to chain
		this.chain.push(newBlock);
	}
	
	isChainValid()
	{
		for (let i = 1; i < this.chain.length; i++)
		{
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i-1];
			if (currentBlock.hash != currentBlock.calculateHash())
			{ return false;}
			/*recalcualate the hash of the block and see if it matches up
			this allows us to detect changes to a single block*/
			if (currentBlock.previousHash != previousBlock.hash)
			{ return false;}
		    //check if this block actually points to the previous block (hash)
			if (this.chain[0] != this.createGenesisBlock())
			{ return false;}
			//check the genesis block
			if (currentBlock.hash != currentBlock.calculateHash())
			{ return false;}
			return true; //if we managed to get here, the chain is valid.
		}
	}
	
}
let savjeecoin = new Blockchain();
savjeecoin.addBlock(new Block("10/08/2019", {amount : 4}));
savjeecoin.addBlock(new Block("22/08/2019", {amount : 10}));

console.log(JSON.stringify(savjeecoin, null, 4));
console.log('BlockChain valid?'+savjeecoin.isChainValid());