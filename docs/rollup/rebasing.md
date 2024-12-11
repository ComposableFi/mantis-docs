---
sidebar_position: 7
---
# Rebasing

The yield for rebasing tokens on Mantis comes from the tokens which are deposited on marginfi. Users deposit tokens on the bridge contract which get deposited into marginfi and restaking vaults. The token gets bridged to Mantis in the same transaction. The rebasing tokens on Mantis have two supply values, which help calculate the actual price of the rebasing token. 

This contains the supply of token on Mantis and the escrowed amount on Solana. The rewards are collected daily and deposited into the bridge along with updating the supply of escrowed tokens on Mantis. The ratio of escrowed tokens on Solana with the actual supply multiplied by their holding gives the rebasing token amount:

```
rebasing token amount = (escrowed amount on Solana / supply on Mantis) * holding amount
```

When the user bridges a token which is rebasing, the amount of token that would be minted would be equal to the current rebasing token amount.

For example, if the user bridges 100 USDC to X token (with supply of 100,000 and escrowed tokens to be 110,000), the total amount of tokens that would be minted would be 90.9090, which would make the rebasing token amount equate to 100. But, this is the initial amount which would increase daily as more rewards are collected. Using the above formula:

```
100 = (110000/100000) * holding amount
holding amount = (100 * 100000) / 110000
Holding amount = 90.9090 
```

For rebasing tokens on Mantis, the amount of tokens escrowed in the bridge on Solana will always be higher than the supply on Mantis because the rewards are collected and escrowed.

When the user wants to bridge back, the rebasing amount would be converted to the holding amount and burnt accordingly. When the token gets released on Solana, the rebasing token amount would be credited.

So, if the user withdraws 110 USDC considering 10% yield was earned (making the holding amount 100), 100 tokens would be burnt on Mantis but 110 tokens would be credited on Solana. The 10 extra tokens is the native yield.
