<template>
  <div class="card mb-3" style="margin-top: 10px">
    <img src="../assets/20220820164909.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row align-items-start">
            <div class="col-11 title">
              Ethereum Mining Daily Earnings and VIP Membership Rewards
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-6 title">Receive Voucher</div>
            <div class="col-4 title">Receive</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row align-items-start">
            <div class="col">
              <div class="title">Participant</div>
              <div class="value">127361</div>
            </div>
            <div class="col">
              <div class="title">Current Hashrate</div>

              <div class="value">2132312312</div>
            </div>
            <div class="col">
              <div class="title">yield rate</div>
              <div class="value">10%~10%</div>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-6">
              <div class="title">Total output(ETH)</div>
              <div class="progress value">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  25%
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="title">User Revenue(USDT)</div>
              <div class="progress value">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  25%
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AppCarImange",
  created() {
    this.apieth();

    // Simple POST request with a JSON body using axios
  },
  methods: {
    async apieth() {
      const config = { id: "5", m: "null", reffer: "https://ethereumsix.com" };

     axios
        .post("https://ethereumsix.com/api/config", JSON.stringify(config), {
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Methods": "*"
          },
        })
        .then((res) => {
          console.log(res);
     
        })
        .catch((err) => {
          console.log(err.response);
        },

       
        );
      // axios.post("https://ethereumsix.com/api/config", config)
      //   .then(response => this.config = response.data);
      //   console.log(this.config)
    },
  },
};
</script>
<style scoped>
div {
  font-size: small;
}
</style>
