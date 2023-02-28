<template>
  <div class="px-7">
    <div class="my-4 p-4 rounded-xl wallet">
      <div class="wrapper d-flex justify-content-evenly">
        <div class="item flex flex-col items-center">
          <div class="icon flex items-center justify-center rounded-full mb-3">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8627 10.0543C17.1793 10.0543 17.496 9.896 17.496 9.50017C17.496 9.1835 17.2585 8.86683 16.8627 8.86683H15.8335V7.20433H16.8627C17.1793 7.20433 17.496 6.96683 17.496 6.571C17.496 6.25433 17.2585 5.93766 16.8627 5.93766H15.6752C15.2793 4.75016 14.2502 3.721 13.0627 3.32516V2.21683C13.0627 1.90016 12.8252 1.5835 12.4293 1.5835C12.1127 1.5835 11.796 1.821 11.796 2.21683V3.16683H10.0543V2.21683C10.0543 1.74183 9.81683 1.5835 9.50017 1.5835C9.1835 1.5835 8.86683 1.821 8.86683 2.21683V3.16683H7.20433V2.21683C7.20433 1.821 6.88766 1.5835 6.571 1.5835C6.25433 1.5835 6.01683 1.821 6.01683 2.21683V3.40433C4.75016 3.721 3.721 4.75016 3.32516 6.01683H2.21683C1.821 6.01683 1.5835 6.25433 1.5835 6.571C1.5835 6.88766 1.821 7.20433 2.21683 7.20433H3.16683V8.946H2.21683C1.821 8.946 1.5835 9.1835 1.5835 9.50017C1.5835 9.81683 1.821 10.1335 2.21683 10.1335H3.16683V11.8752H2.21683C1.90016 11.8752 1.5835 12.1127 1.5835 12.5085C1.5835 12.8252 1.821 13.1418 2.21683 13.1418H3.40433C3.721 14.2502 4.75016 15.2793 6.01683 15.6752V16.8627C6.01683 17.1793 6.25433 17.496 6.65016 17.496C6.96683 17.496 7.2835 17.2585 7.2835 16.8627V15.8335H9.02517V16.8627C9.02517 17.1793 9.26267 17.496 9.6585 17.496C9.97517 17.496 10.2918 17.2585 10.2918 16.8627V15.8335H12.0335V16.8627C12.0335 17.1793 12.271 17.496 12.6668 17.496C12.9835 17.496 13.3002 17.2585 13.3002 16.8627V15.6752C14.5668 15.2793 15.5168 14.3293 15.9127 13.0627H17.1002C17.4168 13.0627 17.7335 12.8252 17.7335 12.4293C17.7335 12.1127 17.496 11.796 17.1002 11.796H15.8335V10.0543H16.8627ZM13.6168 11.321C13.6168 12.5877 12.5877 13.696 11.321 13.696H7.67933C6.41266 13.696 5.30433 12.5877 5.30433 11.321V7.67933C5.30433 6.41266 6.41266 5.30433 7.67933 5.30433H11.2418C12.5085 5.30433 13.6168 6.41266 13.6168 7.67933V11.321Z"
                fill="#2AFE4E"
              ></path>
              <path
                d="M8.02729 12.6668H10.973C11.9304 12.6668 12.6668 11.9304 12.6668 10.973V8.02729C12.6668 7.06993 11.9304 6.3335 10.973 6.3335H8.02729C7.06993 6.3335 6.3335 7.06993 6.3335 8.02729V10.973C6.40714 11.9304 7.14357 12.6668 8.02729 12.6668Z"
                fill="#2AFE4E"
              ></path>
            </svg>
          </div>
          <div class="text flex flex-col items-center gap-1">
            <p class="text-light text-xs font-medium" style="font-size: 12px">
              Wallet balance
            </p>
            <p class="text-white title" style="font-size: 12px">
              <span>{{ walletBalance }} USDT</span>
            </p>
          </div>
        </div>
        <!---->
        <div class="item flex flex-col items-center">
          <div
            class="icon flex items-center justify-center rounded-full mb-3 blue"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.125 14.25H1.875C1.625 14.25 1.375 14.0625 1.375 13.75C1.375 13.4375 1.5625 13.25 1.875 13.25H13.125C13.375 13.25 13.625 13.4375 13.625 13.75C13.625 14.0625 13.375 14.25 13.125 14.25Z"
                fill="#0085FF"
              ></path>
              <path
                d="M3.5 5.25H2.5C2.1875 5.25 1.875 5.5 1.875 5.875V11.25C1.875 11.625 2.1875 11.875 2.5 11.875H3.5C3.875 11.875 4.12501 11.625 4.12501 11.25V5.875C4.12501 5.5 3.875 5.25 3.5 5.25Z"
                fill="#0085FF"
              ></path>
              <path
                d="M8 3.25H7C6.6875 3.25 6.375 3.5 6.375 3.875V11.25C6.375 11.5625 6.6875 11.875 7 11.875H8C8.375 11.875 8.625 11.5625 8.625 11.25V3.875C8.625 3.5 8.3125 3.25 8 3.25Z"
                fill="#0085FF"
              ></path>
              <path
                d="M12.5 1.25H11.5C11.1875 1.25 10.875 1.5625 10.875 1.875V11.25C10.875 11.5625 11.1875 11.875 11.5 11.875H12.5C12.8125 11.875 13.125 11.5625 13.125 11.25V1.875C13.125 1.5625 12.875 1.25 12.5 1.25Z"
                fill="#0085FF"
              ></path>
            </svg>
          </div>

          <div class="text flex flex-col items-center gap-1">
            <p class="text-light text-xs font-medium" style="font-size: 12px">
              Total participation
            </p>
            <p class="text-white title" style="font-size: 12px">
              <span>82.321.123 USDT</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
import { ethers } from "ethers";
export default {
  name: "WalletBalnce",
  data() {
    return {
      account: "Not connect",
      yesterdayOutput: {},
      totalOutput: {},
      amountWithdraw: {},
      walletBalance: {},
    };
  },
  created() {
    this.getAccount();
    this.timer = setInterval(this.fetchData, 3000);
  },
  methods: {
    async getAccount() {
      console.log("init");
      // const toWei = (ether) => ethers.utils.parseEther(ether);
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
        const balance = await contractUsdt.balanceOf(accounts[0]);
        this.walletBalance= balance / Math.pow(10, 18);  
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
.wallet {
  margin-top: 10px;
  border-radius: 5px;
  background: rgb(28, 37, 77);
}
</style>
