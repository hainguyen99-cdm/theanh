<template>
  <div class="withdrawable text-light">
    <div class="d-flex bd-highlight mb-2">
      <div class="p-2 bd-highlight" style="display: flex">
        <div>Withdrawable</div>
      </div>
      <div class="ms-auto p-2 bd-highlight">{{ totalOutput }} USDT</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AppWithdraw",
  data() {
    return {
      totalOutput: {},
    };
  },
  created() {
    this.getAccount();
    this.timer = setInterval(this.fetchData, 3000);
  },
  methods: {
    async getAccount() {
      const { ethereum } = window;
      var accounts = [];
      if (ethereum !== "undefined") {
        accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        this.account = accounts[0];
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
           this.totalOutput= res.data.data.balance
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
  },
  beforeUnmount() {
    this.cancelAutoUpdate();
  },
};
</script>
<style scoped>
.withdrawable {
  border-radius: 5px;
  background: rgb(47, 68, 160);
}
</style>
