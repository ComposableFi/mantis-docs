---
sidebar_position: 5
---
# Roadmap

## Immediate Roadmap

The immediate roadmap for Mantis-related developments and deployments is as follows:

- Mantis V1 launch with MVP features
- Intents user interface (UI) launch

Mantis V2 will launch with additional features.

## The Path to Decentralization

It is important for Mantis to become as decentralized as possible; decentralized structures are more secure, transparent, and resilient to attacks or failures compared to centralized structures. However, a completely decentralized ecosystem is incredibly developmentally intensive. In the interest of being able to provide users with the Mantis solution in an expedient manner, we are rolling out some features that are more centralized at first. Over time, we will continue to make these components more decentralized according to the outline below:

**Solvers**

- Implement slashing parameters

**Relayer/Sequencer**

- Implement slashing parameters

**Auctioneer**

- Initially, off-chain actors
- Implement slashing parameters

**Block Producers**

- Implement slashing parameters

## Security from the L1

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

### Other Searcher Roles

On Mantis, searchers will eventually additionally be able to play a role in the following processes:

#### Mempool Matching

All blockchain nodes have memory pools (mempools) or similar components: a backlog of pending and unconfirmed transactions stored prior to their approval. Yet, mempools have a lot of inefficiency, as they are all closed, separate systems.

Mempool matching addresses these inefficiencies. In this process, pending transactions in different mempools can be matched along CoWs. This means less information is processed on-chain. Specifically, mempools can be exported from protocols on various chains and rollups to a mempool auction contract on Mantis. Here, an auction allows searchers and/or builders to match pending mempool transactions.

Moreover, protocols will be able to export swaps to Mantis. Here, Mantis solvers create and execute solutions to these transactions, just as they would for intentions submitted directly in Mantis. Thus, apps’ transactions or intentions can be solved and settled on Mantis. This can reduce costs and operational complexity for deploying order flow auctions (OFAs) for these apps. It also means protocols will not need to design and onboard their own solvers and solver infrastructure.

#### Domain Exchange

Domain exchange will grant Mantis the ability to guarantee the same execution while waiting for a rest-of-block transaction versus a top-of-block transaction. In this process, searchers (and builders) can pay to reassign a transaction or transaction set for execution to another domain, so long as the proof of success is equivalent. If they do not provide this proof, they are slashed. Domain exchange can also tap into the Restaking Layer; the searcher momentarily restakes and pays to perform just-in-time reassignment. This sets searchers on the path to building blocks collaboratively and sending them directly to proposers without needing builders.

#### Decentralized Block Building

Through Mantis, blocks will be built on involved chains in a decentralized manner. Specifically, after transactions are solved, they are sent to the Mantis rollup lead sequencer to be built.

Sequencer-based block building involves constructing dummy blocks for all relevant chains. This is accomplished by running full nodes of each chain. Then, the sequencer runs a simulation with multiple different execution clients to build dummy blocks. Order flow auctions will be simulated by the sequencer and screened for MEV. We term this the “pre-auction”. Here, searchers express themselves (single- or cross-domain) into a searcher smart contract. Other sequencers can replay state to check the auction’s success. If fraud occurs, slashing occurs.

Another type of conditioning is arbitrage presented to traders for execution. Price-dependent conditioning and conditioning based on timing (e.g. time to execution) will be available. Moreover, in cross-domain searching, cross-domain MEV can be expressed.
