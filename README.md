# silver-blockchain (SRV)

![IMG_4734](https://github.com/silver-network/silver-blockchain-gui/raw/main/src/assets/img/silver_circle.png)

Silver(SRV) is a modern cryptocurrency built from scratch, designed to be efficient, decentralized, and secure. Here are some of the features and benefits:
* [Proof of space and time](https://docs.google.com/document/d/1tmRIb7lgi4QfKkNaxuKOBHRmwbVlGL4f7EsBDr_5xZE/edit) based consensus which allows anyone to farm with commodity hardware
* Very easy to use full node and farmer GUI and cli (thousands of nodes active on mainnet)
* Simplified UTXO based transaction model, with small on-chain state
* Lisp-style Turing-complete functional [programming language](https://chialisp.com/) for money related use cases
* BLS keys and aggregate signatures (only one signature per block)
* [Pooling protocol](https://github.com/Chia-Network/silver-blockchain/wiki/Pooling-User-Guide) that allows farmers to have control of making blocks
* Support for light clients with fast, objective syncing
* A growing community of farmers and developers around the world
* Combining Proof-of-Work and Proof-of-Stake Securely

## Installing

Please viSLV our wiki for more information:
[wiki](https://github.com/silver-network/silver-blockchain/wiki).

## Resource Links

[discord](https://www.)

[Silver Forks Calculator](https://silverforkscalculator.com/)

[Silverforks Blockchain](https://silverforksblockchain.com/)


## How to staking

1. Query the staking addresses according to your farming plot list:

   ```
   $ silver farm summary
   ...
   Staking addresses:
     xcf1x6jjvepyvjv7395nmtywvx9mknshgy78dsmuu38m0e9grxr080nsltjugr (balance: 0, plots: 27)
   ...
   ```

2. DepoSLV coins to the staking address:

   ```
   $ silver wallet send -t xcf1x6jjvepyvjv7395nmtywvx9mknshgy78dsmuu38m0e9grxr080nsltjugr -a 1
   ```

   Wait for the transaction get confirmed, query staking balance again:

   ```
   $ silver farm summary
   ...
   Staking addresses:
     xcf1x6jjvepyvjv7395nmtywvx9mknshgy78dsmuu38m0e9grxr080nsltjugr (balance: 1, plots: 27)
   ...
   ```

3. Withdraw coins from the staking address:

   ```
   $ silver wallet send_from -s xcf1x6jjvepyvjv7395nmtywvx9mknshgy78dsmuu38m0e9grxr080nsltjugr -t $RECEIVER -a 10
   ```

   Do a transaction to transfer the coins from the staking address to any receive address.

   Make sure to choose the wallet that contains the plot farmer key.
