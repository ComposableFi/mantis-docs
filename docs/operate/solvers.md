---
sidebar_position: 1
---

# Operate as a Solver

# Solver Setup Guide

Solvers interested in joining the Mantis network should fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSfKZHphva8_Rl4Vsyf-3QUC9IuTDSAa6FiSfTuULyxm7b0pOQ/viewform). Although operating as a solver is a permissionless process, this form serves as a means to establish contact with solvers to ensure their setup and operations are functioning smoothly and without any issues.

# Solver Setup Instructions
## ⚠️ Important Warnings for Ethereum Solvers
- **⚠️ WARNING:** Modify `send_tx()` on Ethereum for customized gas priority. Make sure you adjust the gas settings accordingly to avoid transaction failures.
- **⚠️ WARNING:** Always use a reliable RPC. Avoid using any unreliable private pools to ensure smooth operations.
- **⚠️ WARNING:** If the Ethereum swap size is **less** than `ETH FLAT_FEE + COMMISSION` or the Solana swap size is **less** than `SOL FLAT_FEE + COMMISSION`, the solver **will not** participate in the auction.
- **⚠️ WARNING:** Solvers need to **approve** USDT to Paraswap on Ethereum using the contract address `0x216b4b4ba9f3e719726886d34a177484278bfcae` **only once**.
- **⚠️ WARNING:** Solvers need to **approve** USDT to Escrow on Ethereum using the contract address `0x64E78873057769a5fd9A2278E6820666ec7e87f9` **only once**.
- **⚠️ WARNING:** Optimize `FLAT_FEES` based on gas consumption and **optimize token approvals** to reduce unnecessary costs.
- **⚠️ WARNING:** The solver's address **must be the same** as the address used to send ETH to the Auctioner.

## 🔧 Important Configuration: `SOLVER_ADDRESSES` in `chains/mod.rs`
When setting up as a solver within the MANTIS V0 system, one crucial variable you need to pay attention to is `SOLVER_ADDRESSES` located in the `chains/mod.rs` file. This variable is vital for ensuring that your solver is correctly recognized on the blockchain networks where you are solving intents.
The `SOLVER_ADDRESSES` variable is a static array that holds the addresses your solver uses on the respective blockchains. Each entry in this array corresponds to the specific chain where you will be solving intents.
Here’s how it looks in the code:
```rust
pub static SOLVER_ADDRESSES: &[&str] = &[
    "0x...", // ethereum, MUST be the pubkey of ETHEREUM_PKEY on .env!
    "CM...", // solana
];
```
## Step 1: Fill the .env File
The first thing you need to do is fill out the `.env` file. Use the provided `env.example` as a template:
```bash
ETHEREUM_RPC="" # https
ETHEREUM_PKEY="" # we use this pkey to be the SOLVER_PRIVATE_KEY, MUST be the private key of ethereum SOLVER_ADDRESSES
SOLANA_RPC="" # https
SOLANA_KEYPAIR=""
BRIDGE_TOKEN="USDT" # USDT
COMISSION="10" # if COMISSION == "1"-> 0.01%
SOLVER_ID="" # Given by Composable
COMPOSABLE_ENDPOINT="" # ws IP address Given by Composable
JITO="" # true or false
```
## Step 2: Run the Solver
To run the solver, use the following command:
```sh
cargo run --release
```
this is the kind of messages you want to see if you made things right:
```rust
Object {
    "code": Number(3),
    "msg": String("Solver was succesfully registered"),
}
Object {
    "code": Number(1),
    "msg": Object {
        "intent": "...", // intent_info
        "intent_id": String("RVcwGSrL"),
    },
}
User wants 20000000, you can provide 95137240
Object {
    "code": Number(4),
    "msg": Object {
        "amount": Number(95137240),
        "intent_id": String("RVcwGSrL"),
        "msg": String("You won this auction!"),
    },
}
You have win 29.196523 USDT on intent RVcwGSrL
```
Inside the `example_solver`, we have two main folders: `routers` and `chains`.
### Routers
In the `routers` folder, we have Jupiter on Solana and Paraswap on Ethereum mainnet. Feel free to add more routers or your own router system. The `routers` folder doesn't need modifications unless you want to add new routers or your own router.
### Chains
In the `chains` folder, we have two chains: Ethereum and Solana. The structure is the same for each chain. The important functions are:
- `chain_simulate_swap()`
- `chain_executing()`
#### `chain_simulate_swap()`
This function is used to participate in the auction. Inside this function, you will find the logic to simulate swaps on Jupiter for Solana and Paraswap for Ethereum. Feel free to change this if you want to add more routers.
#### `chain_executing()`
This function is used when the solver wins the auction and is solving the intent. Inside this function, you will find the process to make a swap on Paraswap or Jupiter. Feel free to change this as well.

## WS:
**Composable Endpoint:**  
`ws://34.78.217.187:8900`  🏗️  upgrading to V1
### Register Solver Addresses (one address per chain)
```rust
{        
   "code": 1,
   "msg": { 
             "solver_id": SOLVER_ID, // Given by Composable
             "solver_addresses": SOLVER_ADDRESSES, // vec!(solana address, ethereum address, ...)
             "intent_hash": "...", // Keccak256Hash of the intent 
             "signature": "..." // ECDSA signature of the hash
          }
}
```
### Response:
**OK:**
```rust
{
   "code": 3,
   "msg": "Solver was successfully registered"
}
```
**ERROR:**
```rust
{
   "code": 0,
   "msg": msg_error
}
```
### Participate in an Intent Auction:
```rust
{
   "code": 2,
   "msg": {
             "intent_id": intent_id, // obtained listening to Intents
             "solver_id": SOLVER_ID, // Given by Composable
             "amount": "...", // off-chain solver setup to get the best quote
             "intent_hash": "...", // Keccak256Hash of the intent 
             "signature": "..." // ECDSA signature of the hash      
          }
}
```
### Response:
**OK:**
```rust
{
   "code": 4,
   "msg": msg // "You won this auction!"
              // OR "You lost this auction"
}
```
**ERROR:**
```rust
{
   "code": 0,
   "msg": msg_error
}
```
