const {expect} = require('chai')
const {ethers} = require('hardhat');

const tokens = (n) =>{
    return ethers.utils.parseUnits(n,toString(),'ether')
}

const ether = tokens

describe('FlashLoan',()=>{
    beforeEach(async()=>{

        // Setup accounts
        accounts = await ethers.getSigners()
        deployer = accounts[0]


        // Load Account
        const FlashLoan = await ethers.getContractFactory('FlashLoan')
        const FlashLoanReciever = await ethers.getContractFactory('FlashLoanReceiver')
        const Token = await ethers.getContractFactory('Token')

        token = await Token.deploy('Ayush Nainwal','Aaya','1000000')
    })

    describe('Deployment',()=>{
        it('works',()=>{
            expect(1+1).to.equal(2)
        })
    })
})