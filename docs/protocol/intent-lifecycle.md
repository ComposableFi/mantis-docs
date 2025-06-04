---
sidebar_position: 2
---

# Intent Lifecycle

## General Process

The lifecycle of an intent on the Mantis protocol is as follows:

**1\. User Submits Intent**

Users initiate the process by calling escrowFundsAndSubmitIntent on the source chain's escrow contract, providing the input token and amount (e.g., 10 ETH), the expected output token (e.g., SOL), the receiver address (which can be on another chain for cross-chain intents), and a timeout after which the intent can be canceled and funds refunded. In the intent data the winnerSover must be empty, as it is not yet known. Upon submission, the contract escrows the user's funds and emits an event with the intent ID.With this call they escrow funds required to fulfill their intent.

Note that the intent will always be sent to the blockchain on which tokens escrowed by the user live. The tokens they want in exchange may or may not live on the same blockchain. If they don’t, then the selected Solver, after paying the tokens to the user, should call onReceiveTransfer function on the source chain’s contract in order to have the escrowed tokens released.

**2\. Auctioneer Detects and Broadcasts Intent at Auction**

The Auctioneer monitors the escrow contracts for new intent events. Upon detecting a new intent, it retrieves the intent data from the contract and broadcasts the details to all registered Solvers for bidding at auction.

**3\. Solvers Analyze and Bid**

Solvers receive the intent, assess market conditions, available liquidity, and potential execution strategies, then submit bids to the Auctioneer specifying the proposed output amount and any fees. Solver must secure funds required to fulfill the intent (for instance if the intent is to swap tokens, the solver must buy tokens that the user wants to receive at this point). It is the solver’s responsibility to figure out the best way to obtain the tokens. Typically, they need to buy or lend these tokens using some deposit.

**4\. Auctioneer Selects Winning Solver**

The Auctioneer evaluates all received bids based on predefined criteria such as the best price (most favorable output amount for the user), execution speed (expected time to complete the transaction), and reliability (the Solver's historical performance and trustworthiness) based on the scoring system implemented by Mantis. The auctioneer then updates the intent on-chain by calling updateIntentData, specifying the winnerSolver and the finalized output amount, and notifies the winning Solver to proceed with execution.

**5\. Solver Executes Transaction on Destination Chain**

The winning Solver proceeds to execute the transaction:

- For Single-Domain Intents (same chain), the Solver calls releaseFunds on the source chain's escrow contract to transfer the locked funds to the recipient.
- For Cross-Chain Intents (different chains), the Solver initiates a cross-chain transfer by sending an IBC message from the source to the destination chain, encodes the intent data within the ICS20-transfer packet's memo field, and on the destination chain, the IBC module processes the packet and calls onReceiveTransfer on the escrow contract, which handles the receipt and releases funds accordingly.

**6\. Funds are Released to Recipient**

Upon successful execution, the recipient receives the output tokens on the destination chain. If the intent fails or times out, the escrow contract ensures funds are returned to the original sender. Tokens escrowed by the user are now released to the solver.The solver can recover whatever tokens they deposited in order to secure the user's payment.

## Examples

### Single-Domain Swap Intent

Scenario: A user wants to swap 10 ETH for a specified amount of USDT on Ethereum.

Process:

1. Intent Submission: The user calls escrowFundsAndSubmitIntent on Ethereum's escrow contract with token set to ETH, amount to 10 ETH, outputToken to USDT, receiver to their Ethereum address, and a specified timeout.
2. Event Emission: The contract locks 10 ETH and emits an event with the intent ID.
3. Auction Process: The Auctioneer detects the intent and broadcasts it to Solvers, who submit bids with proposed USDT amounts.
4. Intent Update: The Auctioneer selects the best bid and updates the intent using updateIntent.
5. Execution: The winning Solver calls releaseFunds on Ethereum's escrow contract, and the contract releases the specified amount of USDT to the user's address.
6. Completion: The user receives USDT, and the transaction is recorded onchain.

### Cross-Chain Swap Intent

Scenario: A user wants to swap 10 ETH on Ethereum for 0.2 SOL on Solana.

Process:

1. Intent Submission: The user calls escrowFundsAndSubmitIntent on Ethereum's escrow contract with token set to ETH, amount to 10 ETH, outputToken to SOL, receiver to their Solana address, and a specified timeout.
2. Event Emission: The contract locks 10 ETH and emits an event with the intent ID.
3. Auction Process: The Auctioneer detects the intent and broadcasts it to Solvers, who analyze cross-chain execution feasibility and submit bids.
4. Intent Update: The Auctioneer selects the best bid and updates the intent using updateIntent.
5. Execution: The winning Solver initiates an IBC transfer by sending an ICS20-transfer packet from Ethereum to Solana, encoding intent data in the packet's memo field.
6. Destination Processing: Solana's IBC module processes the packet, calls onReceiveTransfer on Solana's escrow contract, and the contract releases 0.2 SOL to the user's Solana address.
7. Completion: The user receives SOL on Solana, and the transaction is recorded.
8. Failure Handling: If the transfer fails or times out, the escrow contract on Ethereum allows the user to reclaim their 10 ETH.

# Security

The system is designed to be decentralized and trust-minimized ensuring user control (users initiate intents directly on-chain, retaining control over their funds until execution), transparency (all actions are recorded on the blockchain for independent verification), strict access controls (contracts enforce permissions so only the Auctioneer can call updateIntent and only the winning Solver can call releaseFunds), and fallback mechanisms (timeouts and cancellation options protect users in case of execution delays or failures).

