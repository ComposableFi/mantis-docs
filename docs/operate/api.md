---
sidebar_position: 2
---

# API Documentation

## WebSocket API

### Solver Register: _GET /ws_

#### Request Scheme

| Name                         | Type               | Description                                                                  |
|------------------------------|--------------------|------------------------------------------------------------------------------|
| **type**                     | String             | Type of request: **"solver_register"**                                       |
| **payload**                  | Object             | Payload                                                                      |
| **payload.solver_id**        | String             | Id of solver                                                                 |
| **payload.solver_addresses** | String[]           | Addresses of solver in Ethereum and Solana chains                            |
| **hash**                     | U256 as HEX String | Hash for validity check of the first **payload.solver_addresses**            |
| **signature**                | Object             | ECDSA signature for validity check of the first **payload.solver_addresses** |
| **signature.r**              | U256 as HEX String | R component of ECDSA signature                                               |
| **signature.s**              | U256 as HEX String | S component of ECDSA signature                                               |
| **signature.v**              | U64                | V component of ECDSA signature                                               |

#### Request Example

```json
{
  "type": "solver_register",
  "payload": {
    "solver_id": "Solver No. 52",
    "solver_addresses": [
        "0xaAF737A96d9Fc3D5B8018264AB7DE03b785bAbC1",  // Ethereum
        "HEgX7JBvL156twQiLtnyTt3hn6djpXcBaduMb1FKfc4t" // Solana
    ]
  },
  "hash": "0x1af17a664e3fa8e419b8ba05c2a173169df76162a5a286e0c405b460d478f7ef",
  "signature": {
    "r": "0x0",
    "s": "0x0",
    "v": 0
  }
}
```

#### Response Scheme

| Name        | Type   | Description                                                              |
|-------------|--------|--------------------------------------------------------------------------|
| **type**    | String | Type of response: [**"solver_register_response"**, **"error_response"**] |
| **message** | String | Message of response                                                      |

**Messages**:

| Type                           | Message                                                                               |
|--------------------------------|---------------------------------------------------------------------------------------|
| **"solver_register_response"** | "Solver was successfully registered"                                                  |
| **"error_response"**           | "solver_addresses array is empty"                                                     |
| **"error_response"**           | "The signature does not match the expected address **payload.solver_addresses[0]**"   |
| **"error_response"**           | "Verification failed due to an error: Failed to recover address"                      |
| **"error_response"**           | "Verification failed due to an error: Failed to parse expected address"               |

#### Response Example

```json
{
  "type": "solver_register_response",
  "message": "Solver was successfully registered"
}
```

### Auction: _GET /ws_

#### Request Scheme

| Name                  | Type               | Description                                                                               |
|-----------------------|--------------------|-------------------------------------------------------------------------------------------|
| **type**              | String             | Type of request: **"auction"**                                                            |
| **payload**           | Object             | Payload                                                                                   |
| **payload.intent_id** | U256 as String     | Intent Id                                                                                 |
| **payload.solver_id** | String             | Solver Id                                                                                 |
| **payload.amount**    | U256 as String     | Amount                                                                                    |
| **hash**              | HEX U256 as String | Hash for validity check of the solver address specified on **Solver Register**            |
| **signature**         | Object             | ECDSA signature for validity check of the solver address specified on **Solver Register** |
| **signature.r**       | HEX U256 as String | R component of ECDSA signature                                                            |
| **signature.s**       | HEX U256 as String | S component of ECDSA signature                                                            |
| **signature.v**       | U64                | V component of ECDSA signature                                                            |

#### Request Example

```json
{
  "type": "auction",
  "payload": {
    "intent_id": "137",
    "solver_id": "Solver No. 52",
    "amount": "31"
  },
  "hash": "0x1af17a664e3fa8e419b8ba05c2a173169df76162a5a286e0c405b460d478f7ef",
  "signature": {
    "r": "0x0",
    "s": "0x0",
    "v": 0
  }
}
```

#### Response Success Scheme

| Name          | Type   | Description                              |
|---------------|--------|------------------------------------------|
| **type**      | String | Type of response: **"auction_response"** |
| **intent_id** | String | Id of Intent                             |
| **amount**    | String | Amount                                   |
| **message**   | String | Message of response                      |

**Messages**

| Type                   | Message                  |
|------------------------|--------------------------|
| **"auction_response"** | "You won this auction!"  |
| **"auction_response"** | "You lost this auction." |

#### Response Success Example

```json
{
  "type": "auction_response",
  "intent_id": "137",
  "amount": "31",
  "message": "You won this auction!"
}
```

#### Response Error Scheme

| Name          | Type   | Description                            |
|---------------|--------|----------------------------------------|
| **type**      | String | Type of response: **"error_response"** |
| **message**   | String | Message of response                    |

**Messages**

| Type                 | Message                                                                               |
|----------------------|---------------------------------------------------------------------------------------|
| **"error_response"** | "The signature does not match the expected address **payload.solver_addresses[0]**" |
| **"error_response"** | "No Ethereum solver address found for the given solver_id"                            |
| **"error_response"** | "No solver found for the given solver_id"                                             |
| **"error_response"** | "Verification failed due to an error: Failed to recover address"                      |
| **"error_response"** | "Verification failed due to an error: Failed to parse expected address"               |
| **"error_response"** | "Auction finished for this intent_id: **intent_id**"                                |
| **"error_response"** | "No auction found for this intent_id: **intent_id**"                                |
| **"error_response"** | "No solver participated in this auction for intent_id: **intent_id**"               |
| **"error_response"** | "No intent found for the given intent_id: **intent_id**"                            |
| **"error_response"** | "Unsupported destination chain: **intent.dst_chain**"                               |
| **"error_response"** | "Invalid amount_in format for intent_id: **intent_id**"                             |
| **"error_response"** | "Invalid timeout format for intent_id: **intent_id**"                               |
| **"error_response"** | "Invalid amount format for intent_id: **intent_id**"                                |
| **"error_response"** | "Failed to update intent on Ethereum for intent_id **intent_id**"                   |
| **"error_response"** | "Solver address for **intent.dst_chain** not found"                                 |
| **"error_response"** | "Error updating intent on **intent.dst_chain** with id **intent_id**"             |

#### Response Error Example

```json
{
  "type": "error_response",
  "message": "No Ethereum solver address found for the given solver_id"
}
```