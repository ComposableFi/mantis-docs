---
sidebar_position: 2
---

# The Mantis Intents SDK

The Mantis Software Development Kit (SDK) is a developer toolkit that enables seamless integration with and construction on the Mantis Protocol. The repo for the Mantis Intents SDK is available [here](https://github.com/ComposableFi/mantis_sdk/blob/main/README.md).

## How to Route Orderflow Through Mantis

Projects can send intents through Mantis by integrating our protocol. From here, these intents will be optimally settled by the Mantis solver network.

The easiest way to interact with the Mantis protocol is to use the Mantis intents SDK. However, it is also possible to use the escrow contracts that have been created on each blockchain supported by Mantis to facilitate the intent system. We describe both options below.

## Revenue Share

In the future, projects sending unique orderflow through Mantis can also earn a percentage of revenue. They will be able to select this percentage.

The Mantis intents SDK:

- Enables any application to access Mantis by pointing to the Mantis RPC
  - This enables generalization of intents
- Interacts with the expression layer of Mantis
- Allows Mantis to act as back-end processing and chain abstraction for AI agents and telegram bots

As a result, protocols and applications are able to tap into the benefits of Mantis:

- User friendliness
- Streamlined chain abstraction
- Security and trust-minimization
- Optimized routing
- Incentivization for ecosystem participants

Many projects within the DeFi space can leverage Mantis by tapping into the remote procedure call (RPC) of the Mantis Intent Software Development Kit (SDK). This is shown below:
![dev](../develop/develop.png)


Some examples of these projects that can benefit from integrating Mantis are as follows:

**Crypto Wallets:** Wallets can use Mantis to become intent-centric. This allows their users to submit intents for their desired crypto transaction outcomes. Intent settlement will then be carried out and optimized by Mantis solvers. Intents are executed on any chain that is connected to IBC using the optimal solution achieved. This delivers best execution for users while providing a streamlined UX within the existing wallet UI.

**Order Flow Originators:** Any protocols that originate order flow can integrate Mantis to process orders. This can make these protocols intent-centric and provides chain-agnostic intent settlement over IBC.

**Trading Bots:** Bots’ strategy algorithms can use Mantis-based trading opportunities. Settlement of these trades will then be optimized by Mantis solvers, providing best execution to users. Bot projects benefit from this opportunity financially; any bot that has partnered with Mantis and directs unique order flow to Mantis automatically receives that revenue share, once Mantis processes the given order.

**AI Agents:** Artificial intelligence (AI) agents can partner with Mantis to enable strategically timed swaps along the Mantis protocol. Partner protocols’ existing tech stacks can be used to generate these AI agents. AI agents will then submit user intents at optimal times to Mantis. Intent settlement will be further optimized by Mantis solvers. Similarly to partner trading bots, partner AI agents also receive revenue based on order flow origination. Specifically, any AI agent that has partnered with Mantis will receive a revenue share when they have successfully directed unique order flow to Mantis.

**Order Flow Destinations:** DeFi protocols can integrate Mantis to receive order flow from the platform. Order flow destinations include DEXes, lending protocols, or derivatives platforms.