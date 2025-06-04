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
