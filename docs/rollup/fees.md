# Fee Structure

Initially, we will use the [fee structure of Solana](https://solana.com/docs/core/fees) on the Mantis rollup. Later, we aim to implement a more dynamic fee model.

### Transaction Fees

Fees on the Mantis rollup will be paid in MantisSol, the native token of the Mantis rollup. Other costs on Mantis include the cost of the sequencer posting down to the L1. Thus, the profit to the sequencers is the Mantis rollup fee minus the cost of posting to L1.
