import { contractAddress } from "../const/yourDetails";

export default async function checkBalance(sdk, address) {
  const editionDrop = sdk.useContract(
    contractAddress, contractAbi //pass your custom contract's abi in this function as an argument
  );

  const balance = await editionDrop.balanceOf(address, 0);

  // gt = greater than
  return balance.gt(0);
}
