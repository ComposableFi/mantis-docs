# Decentralized Sequencing

Sequencers are network nodes that play critical roles on a rollup. These roles include:

- Aggregating, ordering, and executing transactions
- Producing preconfirmations
- Sending ordered transactions to the data availability layer

The Mantis rollup has a rotating set of independent sequencers to ensure that these critical functions are not interrupted and to provide censorship-resistance. This further guarantees intents and solutions are accepted before the end of the scoring period. This also maintains the credibility of scoring and facilitating blockspace auctions.

The Mantis sequencing design is similar to [AltLayer’s restaked rollup design](https://docs.altlayer.io/altlayer-documentation) that incorporates a decentralized sequencing network into the rollup’s architecture. Anyone is able to register as a node on the Mantis rollup. Nodes are then able to become validators if they meet a minimum amount of stake. This provides security for the rollup in a manner that incorporates slashing. This further ensures that transaction inclusion on layer 1 is not done in a malicious way. Moreover, node operators are able to provide their own stake or implement a delegated staking system. This reduces the barrier to entry by allowing nodes on Mantis to crowdsource their collateral.
