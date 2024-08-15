# SVM and Sequencer

The Mantis rollup’s execution engine is a lightweight [Solana Virtual Machine (SVM)](https://squads.so/blog/solana-svm-sealevel-virtual-machine) with a sequencer similar to the [Jito validator client](https://www.jito.wtf/validators/). The sequencer interacts directly with the bridge contract on Solana mainnet for unlocking and routing funds to other chains.
