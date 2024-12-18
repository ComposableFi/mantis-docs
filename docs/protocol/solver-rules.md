---
sidebar_position: 4
---

# Solver Rules

## Solver Competition Rules for OFAs

Solvers on the Mantis solver network must adhere to a comprehensive set of rules when providing intent solutions to an order flow auction (OFA). More information on how auctions work on Mantis is available [here](../protocol/solvers.md).

These rules are designed to ensure fair competition, maintain system integrity, and optimize user outcomes. The rules are divided into two categories: those enforced directly by the protocol (through the auctioneer or smart contracts) and those governed by off-chain agreements.

1. **Protocol-Enforced Rules**

1.1 **Intent Feasibility**: Each intent submitted to the Mantis network is associated with a feasibility set. This set defines the specific constraints within which the intent can be solved. For example, a common constraint might be a limit price for a token swap. Both the auctioneer and the smart contract rigorously check these constraints.

1.2 **Solution Validity**: If a solver proposes a solution that fails to meet the feasibility constraints of the given intent, that solution will be automatically disqualified from consideration. This ensures that all proposed solutions align with the user's specified requirements.

1.3 **Timely Submissions**: All solution commitments must be submitted before the auction's closing time. Any late submissions will not be considered for scoring, regardless of their potential quality or profitability.

1.4 **Auction Finalization and Execution**: Upon the auction's conclusion, all valid solutions are scored and ranked in descending order. The solver with the highest-scoring solution is granted both the right and the obligation to execute their proposed solution on the destination blockchain.

1.5 **Liquidity Sources for Swaps**: In the case of swap-type intents, solvers have flexibility in sourcing liquidity. They may utilize their own liquidity reserves or tap into liquidity from Automated Market Makers (AMMs). However, any external liquidity must be secured and committed before the predefined EXECUTION_TIMEOUT.

2. **Off-Chain Agreements**

2.1 **Commitment Enforcement**: In scenarios where a solver commits to a solution but fails to execute it, they are required to pay a penalty. This penalty is equal to the exact amount they committed in their solution. The payment should be made to the "Composable Foundation Refund Smart Contract" (note: this name is tentative and subject to change, or the process may be handled entirely off-chain).

2.2 **Penalty for Non-Payment**: If a solver fails to pay the required penalty before the MISBEHAVIOUR_TIMEOUT, they face a severe consequence: removal from the whitelist of permissioned solvers. This effectively bars them from participating in future auctions on the Mantis solver network.

2.3 **Rationale for Punishment**: The strict penalty system serves a crucial purpose: it incentivizes solvers to follow through on their commitments. This approach is grounded in economic theory and has been shown to lead to optimal intent execution under various conditions. For a deeper understanding of this mechanism, interested parties are encouraged to review literature on "Contingent Fees in Order Flow Auctions."

## **Solver Economics**

**Profit Model**: On Mantis, solver profitability is based on a simple equation:

Profit = Surplus from Trade Execution - Gas Cost on Destination Chain - Cost of IBC Message

This model encourages solvers to optimize their operations, seeking the most efficient execution paths while managing their costs effectively.

**Implications for Solver Strategy**: The profit model incentivizes solvers to:

- Develop sophisticated algorithms for identifying high-value trade opportunities
- Optimize gas usage on destination chains
- Make strategic bidding with realistic execution capabilities

## Solver Competition Rules for RFQs

The solver process for Request for Quotes (RFQs) is structured into two distinct phases:

1. **Pre-Auction Phase:** In this initial stage, solvers provide quotes without the strict price enforcement that characterizes the subsequent OFA phase. This allows for greater flexibility in quote submission but introduces the need for a reputation system to ensure quote integrity.
2. **Order-Flow Auction Phase:** The rules governing this phase are identical to those outlined in the previous section on general solver competition rules. These include adherence to intent feasibility, solution validity, timely submissions, and execution commitments.

**Reputation System**: To maintain the integrity of the pre-auction phase and incentivize accurate quoting, a reputation system is implemented:

- The system tracks the discrepancy between the quoted price in the pre-auction phase and the actual execution price in the OFA phase.
- Solvers who consistently quote prices significantly higher than their execution capabilities will see a decrease in their reputation score.
- This reputation score may influence a solver's future participation rights or priority in quote consideration.
- The goal is to encourage solvers to provide realistic and competitive quotes that align closely with their execution capabilities.

Impact of Reputation:

- **High reputation:** Solvers with consistently accurate quotes may receive preferential treatment, such as increased visibility or priority in quote selection.
- **Low reputation:** Solvers who repeatedly provide inflated quotes may face consequences such as reduced access to RFQ opportunities, lower priority in the solver queue, or in extreme cases, temporary or permanent removal from the approved solver set.

In other words, solvers should be aware that their performance history and adherence to protocol rules contribute significantly to their reputation within the Mantis network. A consistently poor reputation, characterized by repeated rule violations, subpar execution, or failure to meet commitments, may result in punitive actions. These actions could include temporary suspension from intent access, lower priority in the solver queue, or in severe cases, permanent removal from the approved solver set. The platform reserves the right to implement these measures to maintain the integrity and efficiency of the Mantis network, ensuring the best possible outcomes for users and the overall health of the ecosystem. The specific reputation algorithm will be public in the future.
