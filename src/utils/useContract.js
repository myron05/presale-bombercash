import { ethers } from "ethers";
import abi from 'contract/presale.json';
import { Signer } from "./useSigner";

export async function Contract() {
  const contractAddress = '0x49f16B4db8bD6f7B6071a526402E4b7AeD031De4';
  const signer = await Signer();

  const Contract = new ethers.Contract(
    contractAddress,
    abi,
    signer
  );

  return Contract;
}