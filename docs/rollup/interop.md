---
sidebar_position: 4
---
# Interoperability with L1s

Mantis utilizes the [Inter-Blockchain Communication (IBC) Protocol](https://docs.google.com/document/d/1AD2_A95k5dji9Hq3bN1_vYKkZRArffEQgL1QVBtVo1Y/edit#heading=h.i5jdouwaxctp) for cross-chain interoperability with credible commitments. More specifically, Mantis uses the IBC connections created by the [Picasso Network](https://www.picasso.network/).

The IBC enables Mantis to be interoperable with the underlying layer 1, Solana. The IBC also settles transactions from the Mantis rollup (L2) to the destination chain (L1). Mantis taps into Picasso’s IBC connections by natively integrating with the IBC. IBC interoperability is natively integrated into Mantis via state proofs generated in the validator client of the Mantis rollup.

As a result, Mantis is able to seamlessly and securely interoperate with the 110+ and growing ecosystems connected to IBC.
