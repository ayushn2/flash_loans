const {expect} = require('chai')
const {ethers} = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
  }

let token,flashLoan;

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

        // Deploy Token
        token = await Token.deploy('Ayush Nainwal','Aaya','1000000')

        //  Deploy Flash Loan Pool
        flashLoan = await FlashLoan.deploy(token.address)

        // Approve tokens before depositing
        let transaction = await token.connect(deployer).approve(flashLoan.address, tokens(1000000))
        await transaction.wait()
        

        // Deposit tokens to the pool
        transaction = await flashLoan.connect(deployer).depositTokens(tokens(1000000))
        await transaction.wait()
    })

    describe('Deployment',()=>{
        it('sends tokens to flash loan pool contract', async ()=>{
            expect(await token.balanceOf(flashLoan.address)).to.equal(tokens(1000000))
        })
    })
})