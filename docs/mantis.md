---
sidebar_position:  1
slug: /
---
# Introduction

[Mantis](https://www.mantis.app/) is a vertically integrated intent pipeline complete with expression, execution, and settlement. This is accomplished via the Mantis protocol and Mantis rollup. 

:::tip Mantis Season 2 is live!
Early Mantis realm explorers are given the ability to fund their Mantis Account on the rollup prior to its mainnet launch. These assets will be used to earn native yield: SOL will be staked with Solana network validators, while Solana based liquid staked tokens and native stablecoins will be lent on Marginfi and a representation of this stake restaked on Picasso's Restaking Layer.
:::

Mantis synergizes with the [Inter-Blockchain Communication (IBC) Protocol](https://www.ibcprotocol.dev/) via the [Picasso Network](https://www.picasso.network/) to deliver secure interoperability. Ultimately, Mantis strives to establish a decentralized market for cross-domain intent expression.

At its core, Mantis operates with a solver network that powers chain abstraction. But what does this actually mean?

- **Generalized intents:** An intent is an expression of what a user wants to achieve whenever they interact with a protocol, for instance "transfer X from A to B" or "trade X for Y". Practically, an intent is an off-chain signed message that encodes which state transitions a user wants to achieve. Unlike transactions, intents are partial, so one can think of intents as parts of transactions that require other direct or indirect parts as complements in order to form a final balanced transaction which satisfies all users' constraints (Goes, 2022). Intents are a promising solution for improving user experience and outcomes. 
:::info
Mantis optimizes intent settlement via a network of entities called **Solvers**. These solvers compete to provide best execution for intents. Unlike other existing intent frameworks, intents are chain-agnostic on Mantis. This means intent can be accepted from various chains and applications with final settlement to any IBC-enabled blockchain.
:::
- **CoWs:** Coincidence of Wants (CoWs) is an occurrence when one party’s desired transaction is coincidentally the opposite of another party’s desired transaction. Thus, these two transactions can be used to settle one another as opposed to leveraging a third party intermediary like an exchange. Settlement via CoWs is generally optimal to settlement on exchanges as it means there are no fees or delays caused by participation of a third party.
- **Native yield:** Mantis Accounts are network-level accounts on the Mantis Rollup that can be used for participating in on-chain actions. Mantis Account users will earn native yield for any assets deposited to the Mantis L2. Therefore, assets held in Mantis Accounts earn yield even when not actively being used.
- **Single and cross-chain OFAs:** Order flow auctions (OFAs) are mechanisms for transaction settlement optimization. In these auctions, a bidding system with a third party ensures users capture as much value as possible from their transactions. In the case of Mantis, solvers participate as bidders in the OFA, presenting optimized solutions. Then, the auctioneer selects the winning bidder (i.e. the solver presenting the best solution to the user intent).

**This is the future for how users will interact and curate on-chain experiences.**

Through this architecture, key benefits to users are:

1. Capital efficiency via native yield
2. Optimal execution of intents via OFA
3. A simplified, abstracted cross-chain DeFi experience

# Documentation Contents

The Mantis documentation contains the following categories:

**[Learn](../docs/concepts/learn.md):** This is the perfect place for you to find out the core concepts driving Mantis.

**[Mantis Rollup](../docs/rollup/mantis.md):** Here, we describe the Solana Virtual Machine rollup that houses Mantis.

**[Mantis Protocol](../docs/protocol/mantis.md):** Learn about the core features of the Mantis protocol.

**[Develop](../docs/develop/develop.md):** There are many benefits to building on the Mantis tech stack - check out how you can leverage Mantis as a protocol or a developer.
