---
sidebar_position: 3
---
# Mantis Virtual Machine

The Mantis Virtual Machine (MantisVM) is an orchestration language and execution runtime for cross-chain program execution and intent settlement over [Picasso (IBC)](https://docs.picasso.network/). This VM enables a few key functionalities for the Mantis protocol:

- Expression and execution of routes cross-chain
- Generalization of intents
- Funds management
- Conditional intents

## Expression and Execution of Routes Cross-Chain

One frequent problem with VMs is that they are often not parallelizable. This is a part of the reason why we created our own VM. Since the MantisVM is parallelizable, we are able to have MantisVM contracts deployed on every chain.

The winning solution on Mantis is turned into a MantisVM program that specifies which hops and which calls to the virtual wallet must occur. If a solution has multiple hops, the MantisVM program is routed back to the Picasso L1 chain. For example, when transferring to a CEX, the problem is defined as a location to send funds to. User funds are transferred to a virtual wallet. The MantisVM instruction set defines the necessary hops to the required network able to accept the assets. Then, transfers occur over [Picasso (IBC)](https://docs.picasso.network/).

## Funds Management

In the Mantis framework, funds are managed using the MantisVM. The [Virtual Wallet](https://docs.composable.finance/technology/cvm/virtual-wallet) is a MantisVM component that lets users manage funds across multiple networks with a single native account on one chain (the "wallet" chain). The Virtual Wallet streamlines operations, reduces risk, enhances gas efficiency, and promotes increased liquidity usage.

## Generalization of Intents

Intents are generalized on Mantis. This means that they can be accepted from various chains and applications with final settlement to any IBC-enabled blockchain. The MantisVM is what makes this possible given it has contracts deployed on all IBC-connected chains. Protocols on various chains can use these MantisVM contracts to send intents to Mantis. From here, these intents are optimally settled by the Mantis solver network.

## Conditional Intents

Because intents on Mantis are generalized, artificial intelligence (AI) agents will be capable of submitting time-based conditional intents through the protocol. For example, a user may want to make a particular swap at the best price within the next 48 hours. They provide this information to the AI agent, which makes a prediction about when the best price will be within this time constraint. Then, at this time, the AI agent submits an intent to carry out the swap to Mantis. This abstracts conditionality away from solvers and puts it in the hands of AI agents who likely have more powerful algorithms to determine the best timing of swaps. Then, solvers are left to handle identification and execution of the best transaction route at that time. In this manner, the strengths and optimizations of the Mantis protocol and of AI agents are able to synergize, providing the best execution.
