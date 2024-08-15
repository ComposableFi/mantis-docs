# Understanding Cross-Domain MEV

A cross-domain intent settlement platform like Mantis reshapes an emerging type of maximal extractible value (MEV): cross-chain or cross-domain MEV.

## MEV & Cross-Domain MEV

MEV is the maximal value extractable between one or more blocks produced by any arbitrary re-ordering, insertion, or censorship of pending or existing transactions (as defined by [Obadia et al., 2021](https://arxiv.org/pdf/2112.01472.pdf)). Put more simply, it is the greatest profit that can be earned from rearranging transactions within a block.

In recent years, MEV has been explored and described in research. [Daian et al.](https://arxiv.org/pdf/1904.05234), for example, were the first to coin the term “MEV” in their 2019 paper exploring MEV extraction on Ethereum.

Some core types of MEV extraction are listed below:

- **Frontrunning:** Searchers use bots to scan mempools for profitable transactions. These bots replicate user transactions with a higher gas price so that new transactions will be chosen over the initial user’s transaction.
- **Sandwich attacks**: This frontrunning strategy manipulates crypto prices. Sandwiching involves searchers placing a trade right before and after a large DEX trade to benefit from the artificial price change they create.
- **Arbitrage:** Here, traders leverage a price difference between two exchanges (such as two DEXes or a CEX and a DEX). They make a buy at the lower price and then sell at the higher price for a profit. This aligns the prices of the exchanges and makes the market more efficient.
- **Liquidation:** When users do not repay their loans on a lending protocol, their collateral can often be liquidated by anyone to earn a liquidation fee.

Cross-domain MEV is a specific type of MEV. This can be defined as **t**he maximum value that can be captured from arbitrage transactions executed in a specified order across multiple domains.

This is a relatively novel form of MEV, and MEV in general is still a poorly studied and reported phenomenon. Thus, a number of questions remain regarding cross-domain MEV. This is an ongoing area of research and development for Mantis since our framework is cross-domain.

## Technical Definitions

Below, we summarize some of the existing research that has worked to define and describe cross-domain MEV:

Cross-domain MEV has been previously mathematically defined by [Obadia et al, 2021](https://arxiv.org/pdf/2112.01472.pdf). To summarize, cross-domain MEV is the maximum of the sum of final balances across all considered domains into a single base asset (canonically the first domain considered) given there is some assortment of transactions across all those domains that are executed together. Importantly, this research also concluded that:

_“We expect bridges to play an extremely important role in such an MEV ecosystem, as the cheaper, more ubiquitous, and faster bridges become, the more competitive these arbitrage transactions naturally become by decreasing the inequality of the action space across players as a function of their capital.”_

Cross-domain MEV has been proposed to originate from two primary sources ([McMenamin, 2023](https://arxiv.org/abs/2308.04159)):

a. **Intrinsic-extractable value:** Expected value for an extractor at the precise time the state or transaction must be acted on (t = 0).
    1. In an order, this is approximately the expected value of all front- and back-running opportunities combined.
    2. In a pool, this is approximately the expected value from moving a price up or down at the time when orders are included in the chain.


b. **Time-extractable value:** Derived similarly to an option, this is the value derived because the extractor has the time between confirmation times/blocks to determine if they should act on a particular blockchain state.
    1. For extractors, this is the sum of all paths with a positive extractable value at expiration multiplied by the probability of that path happening.