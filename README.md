# Flash Loan

A smart contract implementation of a **Flash Loan Protocol**, allowing users to borrow funds from a liquidity pool, use them for arbitrage or other operations, and repay the loan all in the same transaction. This project includes a token contract, a flash loan pool, and a flash loan receiver contract.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Contracts](#contracts)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Contribution](#contribution)

## Overview

Flash loans are uncollateralized loans that allow users to borrow tokens from a pool and repay them within the same transaction. This implementation includes:
- A **Token Contract** (`Token.sol`) for creating an ERC-20-like token.
- A **Flash Loan Contract** (`FlashLoan.sol`) for handling the flash loan process.
- A **Flash Loan Receiver Contract** (`FlashLoanReceiver.sol`) for utilizing the borrowed funds and ensuring repayment.

## Features

- **Flash Loan Functionality**: Borrow funds temporarily within a single transaction.
- **Custom Token**: Includes a native ERC-20 token for testing and usage.
- **Reentrancy Protection**: Secured using OpenZeppelin's `ReentrancyGuard`.
- **Testing Suite**: Comprehensive test cases to validate contract behavior.

## Contracts

### 1. `Token.sol`
An ERC-20-like implementation with minting functionality for testing. This token is used in the flash loan pool.

### 2. `FlashLoan.sol`
Manages the liquidity pool and provides the following functions:
- `depositTokens(uint256 _amount)`: Deposit tokens into the pool.
- `flashLoan(uint256 _borrowAmount)`: Executes the flash loan.

### 3. `FlashLoanReceiver.sol`
Implements the `IReceiver` interface for receiving and utilizing the flash loan:
- `executeFlashLoan(uint256 _amount)`: Triggers a flash loan and processes the funds.

## Getting Started

### Prerequisites
- Node.js
- Hardhat (Ethereum development environment)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd flash-loan

2. Install dependencies:
   ```bash
   npm install

3. Compile the contracts:
   ```bash
   npx hardhat compile

4. Deploy the contracts (customize the deployment script as needed):
   ```bash
   npx hardhat run scripts/deploy.js --network <network-name>

---

### Testing

1. Run the test suite using Hardhat:
   ```bash
   npx hardhat test test/FlashLoan.js

2. Key Test Cases:
- Ensure token balance is transferred to the flash loan pool during deployment.
- Validate successful borrowing and repayment in a single transaction.
- Test event emissions and reentrancy protection.

---

## Contribution

We welcome contributions to enhance the functionality and usability of the Flash Loan protocol! Here's how you can contribute:

### How to Contribute

1. **Fork the Repository**: 
   - Click the "Fork" button on the top-right corner of the repository page.

2. **Clone the Repository**: 
   - Clone the forked repository to your local machine:
     ```bash
     git clone https://github.com/ayushn2/flash-loan.git
     cd flash-loan
     ```

3. **Create a New Branch**: 
   - Create a new branch for your feature or bug fix:
     ```bash
     git checkout -b feature/new-feature
     ```

4. **Make Your Changes**: 
   - Add or modify the code to implement your feature or fix.

5. **Test Your Changes**: 
   - Ensure all existing and new tests pass:
     ```bash
     npx hardhat test
     ```

6. **Commit Your Changes**: 
   - Write a meaningful commit message:
     ```bash
     git add .
     git commit -m "Add feature: <description>"
     ```

7. **Push Your Changes**: 
   - Push your branch to your forked repository:
     ```bash
     git push origin feature/new-feature
     ```

8. **Create a Pull Request**: 
   - Open a pull request from your branch to the main branch of the original repository. Provide a clear description of your changes.

### Contribution Guidelines

- Follow the existing coding style and conventions.
- Write clear and concise commit messages.
- Ensure all tests pass before creating a pull request.
- Add relevant documentation for new features or modifications.
- Be respectful and professional in all interactions.

---

We appreciate your efforts and contributions to the project! Let's build something great together. 🚀
