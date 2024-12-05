---
sidebar_position: 7
---
# Roadmap

Additional features that we plan to add to Mantis include the following:

### Conditional Intents

While intents in decentralized finance (DeFi) are often described as a broad concept, current intent-based applications typically focus on a limited set of intent types. These commonly take the form of limit orders or bridge transactions, such as:

1. "Trade asset A for asset B with a minimum price p"
2. "Transfer asset A to domain Z"

However, the theoretical potential of intents extends far beyond these basic use cases. Ideally, intents should serve as a tool allowing agents to express "arbitrary" preferences over state transitions within a single domain or across multiple domains.

In economic literature, limit price-type intents can be conceptualized as expressions of an agent's private valuations over assets. Private valuations refer to the subjective worth an individual assigns to an asset, independent of others' opinions or market conditions. For instance, an individual might value a rare coin based on personal interest or sentimental attachment, regardless of its market price (also known as Walrasian demands).

However, it's crucial to recognize that users and agents often do not operate solely on private valuations. In reality, economic actors are interdependent, and their valuations of certain objects can depend significantly on the valuations of others. A prime example of this phenomenon is the valuation of digital art.

In such cases, if no one expresses any valuation for an item, people generally wouldn't value it. Conversely, when an item experiences high demand, agents often interpret this demand as a positive signal, indicating that the item possesses some intrinsic value. This concept aligns with the greater fool theory and speculative bubbles in financial markets.

Given this reality, intents should be capable of capturing these interdependent valuations. Many items are not valued in isolation from the world (unlike, for example, consuming an apple, which is generally independent of others' consumption). Instead, their value is deeply intertwined with other agents' valuations.

Natural examples of interdependent valuations that could be expressed through more sophisticated intents include:

1. Stop-losses: An order to sell an asset when it reaches a certain price, reflecting a valuation dependent on market movements.
2. Bidding in NFT auctions: Where the perceived value of an NFT can be influenced by the bids of other participants.
3. Copy-trading strategies: Where an agent's trading decisions are based on the actions of another trader (use other traders actions as positive or negative signals).
4. Dynamic liquidity provision: Adjusting liquidity based on market volatility or trading volume.
5. Trading conditional to prediction market quotes on real events.

By expanding the concept of intents to encompass these interdependent valuations, DeFi protocols and users can more accurately reflect the complex decision-making processes of market participants. This evolution could lead to more efficient markets, improved price discovery mechanisms, and a closer alignment between DeFi systems and real-world economic behaviors. We call this subset of intents **conditional intents**, emphasizing that the execution of such is conditioned to external signals or events.

Because intents on Mantis are generalized, artificial intelligence (AI) agents will be capable of submitting time-based conditional intents through the protocol. For example, a user may want to make a particular swap at the best price within the next 48 hours. They provide this information to the AI agent, which makes a prediction about when the best price will be within this time constraint. Then, at this time, the AI agent submits an intent to carry out the swap to Mantis. This abstracts conditionality away from solvers and puts it in the hands of AI agents who likely have more powerful algorithms to determine the best timing of swaps. Then, solvers are left to handle identification and execution of the best transaction route at that time. In this manner, the strengths and optimizations of the Mantis protocol and of AI agents are able to synergize, providing the best execution.

### The Path to Decentralization

It is important for Mantis to become as decentralized as possible; decentralized structures are more secure, transparent, and resilient to attacks or failures compared to centralized structures. However, a completely decentralized ecosystem is incredibly developmentally intensive. In the interest of being able to provide users with the Mantis solution in an expedient manner, we are rolling out some features that are more centralized at first.

The Rollup is the cornerstone for making this architecture truly decentralized. Currently, the Auctioneer holds some central power, which could lead to potential misbehavior. The goal is to migrate the off-chain Auctioneer to the Rollup, ensuring a fairer system for both Users and Solvers. Over time, we will continue to make these components more decentralized according to the outline below:

**On-Chain Auctioneer Functionality:**

- The Escrow contract on the Rollup will incorporate the Auctioneer's role, bringing the auction process on-chain. Users will send their intents directly to the Rollup.
- Solvers will monitor these intents and decide if they want to participate in the auction. The auction itself will occur on-chain within the Escrow contract.

**Transparency and Monitoring:**

- The future vision includes a Front-End blockchain explorer that pulls data from the Escrow Contract on the Rollup. This explorer will display critical information, such as:
  - **Pending Intents:** Whether they are private or public for discussion.
  - **On-Execution Intents:** Intents currently being processed.
  - **Executed Intents:** Intents that have been fully executed.
- Essentially, the Escrow contract on the Rollup will act as a mempool for intents, providing transparency and allowing all participants to monitor the process.

**Slashing Parameters:**

- We will implement slashing parameters for solvers, relayers/sequencers, and block producers to disincentivize misbehavior.

### Security from the L1

In the Ethereum context, there are two requirements for being a rollup:

1. **Rollback based on the L1:** Rollup blocks are validated by the corresponding L1. If the L1 says the transaction is invalid (i.e. the L1 does not accept the transaction), the rollup rolls it back.
2. **Emergency withdrawals from L1 using the L2:** The state root can be used to make an emergency withdrawal from the layer 2 in the event the L2 stops running.

The Mantis rollup is being developed to fit these requirements.

## Cross-Domain Expressiveness and Atomicity

Pricing cross-domain intent solutions presents multiple challenges for solvers. These challenges are primarily financial. Solvers must first manage the initial expenses related to setting up infrastructure necessary for participating in intent markets. Additionally, congestion costs arise when entering the market; these costs vary depending on the number of competitors and affect solvers while they vie for opportunities. Finally, solvers contend with the risk of non-atomic execution due to the lack of expressiveness of blockspace allocation for multiple chains. This further complicates their operational landscape.

Thus arises a need for mechanisms that mitigate these costs for solvers and potentially enhance overall user welfare. Moreover, such mechanisms will reduce the cost of MEV extraction between chains and increase the revenue of validators, as has been seen in single-domain MEV auctions.

Our thesis is that users, searchers, and solvers have preferences over different domains. Further, these parties can accrue value from combinatorial state transitions over different domains. An example is a searcher that exploits price discrepancies of DEXes on two different domains. However, these preferences over state transition currently lack the necessary infrastructure to be expressed atomically. At most, currently users bid simultaneously on an independent auction in the hopes of getting all transactions executed. However, there is a high risk of execution failure.

To mitigate this, Mantis will coordinate various actors to sell blocks from different domains through a combinatorial auction. Mantis combinatorial auctions will enable builders and searchers to express bundles through different domains. This will facilitate the following benefits:

- Atomicity
- More revenue to validators that sell their items separately
- Efficient blockspace allocation

The initial design is just-in-time auctions to allow builders to express atomically. This design for two domains will consist of two simultaneous English auctions with a unique combinatorial block take-it-or-leave it offer. Buyers will be able to place send blocks with bids for the independent blocks and combinatorial blocks.

This approach poses two main challenges: the risk of double-signing and the high level of trust placed in the relay. Thus, in the future, Mantis aims to introduce a future blockspace market, where the rights to future blockspace on multiple domains can be bought and sold. This aims to decrease the monopolistic power of sellers selling combinations of blocks while increasing market efficiency.

Both the initial just-in-time auctions and the more advanced combinatorial blockspace future markets are described in detail in the [Mantis Whitepaper](https://assets.website-files.com/65b28e756a8eda2e91e76ca4/6656289f21123d6215091555_MANTIS%20Whitepaper.pdf).
