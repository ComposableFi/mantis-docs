---
sidebar_position: 1
---

# Setup

### How to Install Rust

1. Install Rust:
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

2. Verify installation:
```
rustc --version
```

### How to Setup .env
1. 
Create a .env file in the project root:
```
touch .env
```

2. Add these variables:
```
ETHEREUM_RPC=""
ETHEREUM_PKEY=""
SOLANA_KEYPAIR=""
```

### How to Run Commands

Use this structure:
```
cargo run -- [COMMAND]
```

Example commands:
Solana single domain:
```
cargo run -- solana <amount_in> <token_in> <token_out> <amount_out> <timeout>
```

Ethereum single domain:

```
cargo run -- ethereum <token_in> <amount_in> <token_out> <amount_out> <timeout>
```

## Requesting API Keys

Please fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSdc-jOpCJ3djIbcrPWK2dc700AVclA0aYJiwgL6hOvTC4FMmQ/viewform?usp=sf_link) to request Mantis API keys.

## Explorer for Rollup

We’re using Solana explorers:

- [Solscan](https://solscan.io/?cluster=custom&customUrl=https://mantis-testnet-rollup.composable-shared-artifacts.composablenodes.tech/rpc)
- [Solana Explorer](https://explorer.solana.com/?cluster=custom&customUrl=https%3A%2F%2Fmantis-testnet-rollup.composable-shared-artifacts.composablenodes.tech%2Frpc)

WS: [ws://35.241.172.68:8900]

RPC: [https://mantis-testnet-rollup.composable-shared-artifacts.composablenodes.tech]

Faucet: [http://35.241.172.68:9900]

## Testnet

RPC: [https://mantis-rollup.composable-shared-artifacts.composablenodes.tech/rpc]

WS: [https://mantis-rollup.composable-shared-artifacts.composablenodes.tech/ws]

Explorer #1: [https://solscan.io/?cluster=custom&customUrl=https://mantis-rollup.composable-shared-artifacts.composablenodes.tech/rpc]

Explorer #2: [https://explorer.solana.com/?cluster=custom&customUrl=https%3A%2F%2Fmantis-rollup.composable-shared-artifacts.composablenodes.tech%2Frpc]

# Faucet

[https://mantis-rollup.composable-shared-artifacts.composablenodes.tech/faucet]

# How to Deploy Smart Contracts on the Mantis Rollup

Contracts deployment works exactly [the same](https://solana.com/docs/programs/deploying) as on Solana, but notice that working with the chain and the SPL contracts may be different (see the section below).

Mantis contracts are deployed to the Solana blockchain the same way as other Solana programs (or smart contracts). Download and run the script in order to install the Solana CLI. More details can be found [here](https://solana.com/docs/intro/installation#install-the-solana-cli).

Once the Solana CLI is installed, it can be used to deploy programs to the blockchain with the following command:

```
solana program deploy &lt;PROGRAM_FILEPATH&gt;
```

Here, &lt;PROGRAM_FILEPATH&gt; is the executable to be deployed. Optionally, the –-program-id parameter can be used to provide a path to a JSON file containing a keypair which should be used for deployment. See [here](https://docs.solanalabs.com/cli/examples/deploy-a-program) for more details.

A quick guide on how to develop a Solana program is available [here](https://www.quicknode.com/guides/solana-development/anchor/how-to-write-your-first-anchor-program-in-solana-part-1).

## Chain-Specific Changes

Mantis is a fork of [Jito](https://github.com/jito-foundation/jito-solana), which means it supports some features of Jito such as [transaction bundles](https://docs.slerf.tools/english-en/solana-guide/jito-bundle) that can be useful for an MEV rollup..

Also, Mantis uses a [modified](https://github.com/ComposableFi/solana-program-library/tree/mantis) version of SPL programs, in particular, spl-token: it adds an additional \`supply_on_l1\` field to the Mint account of a token that is used to render the proper amount on the UI when dealing with rebased tokens.


