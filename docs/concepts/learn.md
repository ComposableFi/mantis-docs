---
sidebar_position: 1
---
# Learn 
## The Problem

A streamlined DeFi protocol like Mantis has become relevant due to several key issues facing the DeFi space:

- **Poor user experience (UX):** Decentralized applications are often not intuitive, which poses a major barrier to widespread adoption of Web3.
- **Suboptimal earnings opportunities:** The massive expanse of DeFi makes it hard for users to identify optimal opportunities and execute upon them before they disappear.

Mantis addresses these problems by providing a truly simplified, GPT-style experience for interacting with Web3. Simply type to trade, and your transaction is optimally executed by solvers and AI.

:::info
**Understanding Intents & Solvers**

Intents have become a hot topic in DeFi. In general, intents are understood to be users’ desires for a given transaction or other outcome. Intents include desired parameters such as to swap X amount of A token for B token. But, intents also leave some room for flexibility such as where this swap occurs.

Anoma does a great job of breaking down the history and various definitions of intents in [this blog](https://anoma.net/blog/intents-arent-real) about their Intents Day event. [This blog](https://blog.essential.builders/introducing-essential/) by Essential also provides another means of defining intents and solvers.
:::

Intents are important in DeFi since they can improve the user experience. They can carry out all types of cross-domain transactions while abstracting away the complexity involved in this process. **With intents, users do not have to spend time identifying the best opportunities to satisfy their goals only to find that these opportunities are no longer available by the time that they have explored all options.** The Mantis solver network and intent settlement framework do all of this for the user in short order.

However, many existing intents solutions are not cross-chain interoperable or vertically integrated with execution and settlement. This means that users can not leverage them for cross-chain transactions. These protocols are also unable to accrue value from pay-for-order-flow (PFOF). In PFOF, a market maker pays a broker for routing their clients’ trades to a market maker. Thus, market makers benefit from increased order flow and thus increased earnings. Brokers also earn money by effectively selling the order flow of their users to market makers. Moreover, clients can benefit from reduced trading costs as PFOF can be leveraged to at least partially cover user fees.

## The Solution

**Mantis allows end users to tap into DeFi from a single point of entry: simply entering their intents for a desired outcome into the Mantis interface.** From there, Mantis handles the rest - optimized by solvers and AI. This includes:

- Expression of the intent to solvers
- Execution of the intent
- Settlement of the intent as a finalized transaction

The DeFi user experience is further improved because of the following characteristics of Mantis:

- **User Friendly:** Mantis provides an intuitive interface of intents where users can specify their desired outcome for a cryptocurrency transaction in simple terms. Then, Mantis's solver network and DISE handle the rest.
- **Streamlined:** Mantis abstracts away the complexities of DeFi - just type and trade.
- **Secure:** Mantis secures user funds by requiring solvers to provide a stake before handling these funds.
- **Optimized:** Solvers provide optimal solution routes to intents. Whenever possible, solvers use cross-domain Coincidence of Wants (CoW) matching to further maximize users' returns by minimizing fees. DISE further optimizes the proces with AI automation.

**To summarize, Mantis is an AI-simplified DeFi application and ecosystem. pThe Mantis protocol facilitates a network of competing solvers that devise solutions aimed at optimizing Mantis app user results. The DISE large language model (LLM) even further optimizes and automates transactions, making interacting with DeFi easier than ever.**

## Architectural Overview

### 1\. Mantis Protocol

The Mantis Protocol is a framework 1) for users to submit intents for cryptocurrency transactions, and 2) for a network of solvers to compete to create and execute upon the best solution route for each intent.

On the Mantis Protocol, solvers receive intents broadcasted by the Auctioneer. Subsequently, solvers assess the feasibility and profitability of executing the intent, submitting competitive bids specifying proposed execution details. Upon winning an auction, solvers provide a solution through the appropriate escrow contract.

This protocol is supported by smart contracts on each chain. Specifically, each supported blockchain hosts an escrow contract that facilitates the intent system. These contracts enable users to submit new intents by locking funds in a contract, generating a unique ID for the intent and storing intent-related information. These contracts also allow the auctioneer and solvers to play their roles in the Mantis Protocol.

In-depth details about the Mantis Protocol are available [here](https://docs.mantis.app/protocol/mantis).

### 2\. Mantis App

The Mantis application makes it possible for users to interact with the Mantis protocol and make swaps on:

- Ethereum
- Solana
- Cross-chain: Ethereum - Solana

Check out the Mantis app for yourself [here](https://about.mantis.app/).

### 3\. DISE

The DISE LLM lets you automate all sorts of transactions in Web3, from simple swaps to multi-step transactions and limit orders. Simply type out what you want to happen, and DISE handles the rest - optimized by AI and the Mantis solver network.

Check out DISE [here](https://trade.mantis.app/chat) - first 8 prompts are free!

# Whitepaper

The Mantis whitepaper is available [here](https://assets.website-files.com/65b28e756a8eda2e91e76ca4/6656289f21123d6215091555_MANTIS%20Whitepaper.pdf).

# Litepaper

The Mantis litepaper is available [here](https://assets.website-files.com/65b28e756a8eda2e91e76ca4/6655e8e69277b97e9c11c793_MANTIS%20Litepaper.pdf).
