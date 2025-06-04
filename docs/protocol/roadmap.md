---
sidebar_position: 7
---
# Roadmap

The DISE-specific roadmap is available [here](https://docs.mantis.app/dise/roadmap).

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

**Slashing Parameters:**

- We will implement slashing parameters for solvers to disincentivize misbehavior. Our plan is to implement EigenLayer's products for this.
