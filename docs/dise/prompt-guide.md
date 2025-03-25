---
sidebar_position: 2
---

# Prompt Guide

## Introduction

DISE LLM is Mantis's proprietary AI framework powering personal trading agents for cryptocurrency. The system bridges natural language input with on-chain execution, allowing you to research market data and execute trades through simple conversational commands.

This guide will help you interact effectively with DISE LLM by providing example prompts and explaining the system's capabilities.

## How DISE LLM Works

When you enter a prompt, DISE LLM:

1. Analyses your input to determine your intent
2. Categorises your request as trading, research, or general conversation
3. Structures your request into an executable format
4. Processes the request and returns relevant information or transaction details

## Prompt Categories

DISE LLM handles three main types of interactions:

### 1. Trading Operations
Execute buys, sells, swaps, and set limit orders across supported networks.

### 2. Market Research
Access token information, price data, wallet analysis, and market trends.

### 3. General Chat
Discuss crypto concepts, get explanations, or engage in casual conversation.

## Trading Command Examples

### Basic Token Swaps

| Prompt | Description |
|--------|-------------|
| `Buy 10 SOL with USDC` | Swap USDC for 10 SOL |
| `Swap 100 USDC for SOL` | Exchange 100 USDC for SOL |
| `Sell half of my SOL for USDC` | Convert 50% of your SOL holdings to USDC |
| `Trade 0.5 ETH for MATIC` | Exchange ETH for MATIC |
| `Convert 50 USDT to BTC` | Swap USDT for Bitcoin |

### Limit Orders

| Prompt | Description |
|--------|-------------|
| `Buy JUP when it reaches $1.20 with 100 USDC` | Create a limit order to buy JUP when it hits target price |
| `Buy BONK when it dips to $0.00002 using 50 USDC` | Set a buy order at a specific price point |
| `Sell SOL when it reaches $140 for USDC` | Create a sell limit order |
| `Buy PYTH with $100 worth of SOL when it hits $0.40` | Create a limit order using SOL as the source token |

### Portfolio Management

| Prompt | Description |
|--------|-------------|
| `Show me my limit orders` | Display all your limit orders |
| `Show me my active limit orders` | View currently active limit orders |
| `Show me my successful limit orders` | View completed limit orders |
| `Show me my failed limit orders` | View limit orders that couldn't be executed |

## Market Research Examples

### Token Information

| Prompt | Description |
|--------|-------------|
| `Tell me about JUP` | Get detailed information about Jupiter token |
| `What is the market cap of AAVE?` | Check specific token metrics |
| `Show me the price history of SOL for the last 7 days` | View historical price data |
| `What's the 24h volume for BONK?` | Get trading volume information |
| `How much liquidity does JTO have?` | Check liquidity depth for a token |
| `When was PYTH created?` | Get token creation date |

### Balance Checks

| Prompt | Description |
|--------|-------------|
| `What is my SOL balance?` | Check your SOL holdings |
| `How much ETH do I have?` | View your ETH balance |
| `Show my USDC balance` | Check your stablecoin holdings |

### Market Trends

| Prompt | Description |
|--------|-------------|
| `Show me 10 trending tokens on Solana` | View popular tokens on Solana |
| `What are the top 5 tokens by volume today?` | See highest volume tokens |
| `Show me trending tokens with market cap over $10M` | Apply filters to trend analysis |
| `Which tokens are trending on Ethereum?` | View network-specific trends |

### Wallet Analysis

| Prompt | Description |
|--------|-------------|
| `What are smart money wallets for JITO?` | See what sophisticated traders are doing with JITO |
| `Show me the recent trade history of [solana_address]` | View transaction history for a specific wallet |
| `Who are the top holders of JUP?` | Identify largest token holders |
| `Show me the latest trades for [address]` | View recent activity for a wallet |

### Social Insights

| Prompt | Description |
|--------|-------------|
| `X digest for @SBF_FTX` | Get a summary of tweets from a specific account |
| `X digest for DeFi` | Get a topic-based tweet summary |
| `X digest for memecoins` | See what's being discussed about a category |
| `Latest tweets about ETH` | View recent X discussions about Ethereum |
| `Latest tweets about SOL` | See what people are saying about Solana |
| `What is @EricTrump tweeting about?` | Check recent tweets from a specific handle |

## Advanced Usage Tips

### Combining Multiple Parameters

You can include multiple parameters in your requests for more specific information:

- `Show me trending tokens on Solana with liquidity over $1M ordered by marketcap`
- `Tell me about JUP's price history, marketcap, and top holders`

### Contextual Follow-ups

DISE LLM maintains context through your conversation, allowing natural follow-ups:

**User:** `Tell me about JUP`  
**DISE:** *[Provides JUP information]*  
**User:** `What about its trading volume?`  
**DISE:** *[Provides JUP volume information]*

### Specifying Networks

When requesting information or executing trades, you can specify the network:

- `Buy 10 USDC worth of BONK on Solana`
- `Show me trending tokens on Ethereum`
- `What's my ETH balance on Arbitrum?`

### Using Percentages and Fractions

You can use natural language to specify quantities:

- `Swap half of my SOL for USDC`
- `Sell 25% of my ETH for MATIC`
- `Convert a third of my USDT to SOL`

## Error Handling

If DISE LLM doesn't understand your request, it will:

1. Ask for clarification on ambiguous requests
2. Provide specific error messages for invalid parameters
3. Suggest alternative approaches when a request can't be fulfilled

When requesting a swap without specifying amounts, DISE LLM will prompt you for the missing information:

**User:** `Swap SOL for USDC`  
**DISE:** `How much SOL would you like to swap for USDC?`

## Network Support

DISE LLM currently supports operations on the following networks:

- Solana
- Ethereum
- [Other supported networks coming soon]

Note that some features may be network-specific. For example, Smart Money analysis is currently only available for Solana.

## Best Practices

1. **Be specific** with your requests when possible
2. **Verify transaction details** before confirming trades
3. **Start simple** and add complexity as you become familiar with the system
4. **Use natural language** rather than trying to use specific syntax
5. **Check network compatibility** for specific feature requests

## Feature Limitations

- Balance checks support one token at a time
- Some research features may be network-specific
- Token information requests should focus on one token for best results

## Getting Help

If you're unsure how to formulate a request, simply ask DISE LLM for help:

- `How do I check token information?`
- `What trading commands can I use?`
- `Help me create a limit order`

DISE LLM will provide guidance on how to structure your prompts for best results.