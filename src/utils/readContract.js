import { ethers } from "ethers";
import abi from 'contract/presale.json';

export async function ReadContract() {
  const contractAddress = '0x49f16B4db8bD6f7B6071a526402E4b7AeD031De4';
  const provider = ethers.getDefaultProvider('https://bsc-dataseed.binance.org');

  const Contract = new ethers.Contract(
    contractAddress,
    abi,
    provider
  );

  return Contract;
}