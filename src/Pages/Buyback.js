import React, { useState } from 'react';
import BuybackDetails from '../Components/Buyback/BuybackDetails';
import BuybackLowerContainer from '../Components/Buyback/BuybackLowerContainer';

import Web3 from 'web3';
import { SGAddress, SGAbi, BBAddress, BBAbi } from '../constants';

const Buyback = () => {

  const [account, setAccount] = useState();
  const [balances, setBalances] = useState([0, 0, 0]);
  const [redeemLabel, setRedeemLabel] = useState("REDEEM GALAXIA")

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    }
  }

  const getBalances = async (address) => {
    const contract = await new window.web3.eth.Contract(BBAbi, BBAddress);
    const balance = await contract.methods.check_multipliedBalance(address).call();
    setBalances(balance);
  }

  const onConnectWallet = async () => {
    if (account) {
      return;
    }

    await loadWeb3();

    const accounts = await window.web3.eth.getAccounts();
    setAccount(accounts[0]);

    getBalances(accounts[0]);
  }

  const onRedeem = async () => {
    if (balances[0] === 0) {
      return;
    }
    
    setRedeemLabel("Processing ...");
    const sgContract = await new window.web3.eth.Contract(SGAbi, SGAddress);
    await sgContract.methods.approve(BBAddress, "10000000000000000000").send({ from: account });
    const contract = await new window.web3.eth.Contract(BBAbi, BBAddress);
    await contract.methods.buyBack().send({ from: account });
    getBalances(account);
    setRedeemLabel("Success");
  }

  return (
    <div className="buyback">
      <button className="buyback__connect-wallet-button" onClick={onConnectWallet}>{ account ? `${account.substring(0,10)}...${account.substring(account.length-5)}` : "Connect wallet" }</button>
      <div className="buyback__header">Buyback</div>
      <div className="buyback__large-container">
        <BuybackDetails />
        <BuybackLowerContainer balances={balances} onRedeem={onRedeem} redeemLabel={redeemLabel} />
      </div>
    </div>
  );
};

export default Buyback;
