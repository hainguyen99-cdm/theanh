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
              <span>{{ walletBalance }}  USDT</span>
            </p>
          </div>
        </div>
        <!---->
        <div class="item flex flex-col items-center">
          <div
            class="icon flex items-center justify-center rounded-full mb-3 pink"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0669 5.49838C10.0669 7.37104 8.53451 8.87175 6.62228 8.87175C4.71075 8.87175 3.17764 7.37104 3.17764 5.49838C3.17764 3.62571 4.71075 2.125 6.62228 2.125C8.53451 2.125 10.0669 3.62571 10.0669 5.49838ZM1.4165 12.6915C1.4165 10.9579 3.81459 10.5242 6.62228 10.5242C9.44522 10.5242 11.8281 10.9729 11.8281 12.7078C11.8281 14.4413 9.42998 14.875 6.62228 14.875C3.79934 14.875 1.4165 14.4263 1.4165 12.6915ZM11.456 5.55953C11.456 6.51317 11.1635 7.40301 10.6506 8.14216C10.5973 8.21818 10.6444 8.32068 10.7373 8.33697C10.8662 8.35801 10.9986 8.3709 11.1337 8.37362C12.4783 8.40823 13.685 7.56048 14.0184 6.28375C14.5125 4.38937 13.0626 2.68843 11.2155 2.68843C11.0152 2.68843 10.8232 2.70879 10.6361 2.74612C10.6104 2.75155 10.5827 2.76377 10.5689 2.78549C10.5508 2.81332 10.564 2.84929 10.582 2.87305C11.1372 3.63528 11.456 4.56313 11.456 5.55953ZM13.6829 9.70579C14.5867 9.87888 15.1807 10.2311 15.4267 10.745C15.6353 11.1658 15.6353 11.6545 15.4267 12.0753C15.0504 12.8708 13.8361 13.1267 13.3641 13.1925C13.2664 13.2061 13.188 13.1246 13.1984 13.0283C13.4396 10.8237 11.5219 9.77842 11.0256 9.53814C11.0048 9.52661 11 9.51032 11.002 9.49946C11.0034 9.49267 11.0124 9.48181 11.0284 9.47977C12.102 9.45941 13.2567 9.60398 13.6829 9.70579Z"
                fill="#FC67FF"
              ></path>
            </svg>
          </div>
          <div class="text flex flex-col items-center gap-1">
            <p class="text-white text-xs font-medium" style="font-size: 12px">
              Hash Aid
            </p>
            <p class="text-white" style="font-size: 12px">
              <span>{{amountWithdraw  }} USDT</span>
            </p>
          </div>
        </div>
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
import axios from "axios";
export default {
  name: "WalletBalnce",
  data() {
    return {
      account: "Not connect",
      yesterdayOutput: {},
      totalOutput: {},
      amountWithdraw: {},
      walletBalance:{}
    };
  },
  created() {
    this.getAccount();
    this.timer = setInterval(this.fetchData, 3000);
  },
  methods: {
    async getAccount() {
      const { ethereum } = window;
      let accounts = [];
      if (ethereum !== "undefined") {
        accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        this.account = accounts[0];
        if (this.account != "Not connect") {
          const address = { address: accounts[0] };
          axios
            .post(
              "/wallet?address",
              JSON.stringify(address),
              {
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Methods": "*",
                },
              }
            )
            .then((res) => {
              this.amountWithdraw = res.data.data.amountWithdraw / Math.Pow(10, 18);
              this.walletBalance = res.data.data.balance / Math.Pow(10, 18);

            })
            .catch((err) => {
              console.log(err.response);
            });
        }
      }
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
