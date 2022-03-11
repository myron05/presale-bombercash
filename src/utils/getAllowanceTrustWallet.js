import { ethers, providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

export async function AllowanceTrustWallet(tokenAddress) {
  const contractAddress = '0x49f16B4db8bD6f7B6071a526402E4b7AeD031De4';
  let abi = ["function allowance(address _owner, address _spender) public view returns (uint256)"];
  
  const provider = new WalletConnectProvider({
    rpc: {
      56: "https://bsc-dataseed.binance.org"
    },
  });

  await provider.enable();

  const web3Provider = new providers.Web3Provider(provider);
  const accounts = await web3Provider.listAccounts();

  const signer = web3Provider.getSigner();

  const Contract = new ethers.Contract(
    tokenAddress,
    abi,
    signer
  )

  let allowance = await Contract.allowance(accounts[0], contractAddress);

  return allowance;
}