import { ethers, providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import abi from 'contract/presale.json';

export async function ContractTrustWallet() {
  const contractAddress = '0x49f16B4db8bD6f7B6071a526402E4b7AeD031De4';

  const provider = new WalletConnectProvider({
    rpc: {
      56: "https://bsc-dataseed.binance.org"
    },
  });

  await provider.enable();

  const web3Provider = new providers.Web3Provider(provider);
  const signer = web3Provider.getSigner();

  const Contract = new ethers.Contract(
    contractAddress,
    abi,
    signer
  )

  return Contract;
}