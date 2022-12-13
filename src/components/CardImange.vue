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
              <div class="value">{{participant}}</div>
            </div>
            <div class="col">
              <div class="title">Current Hashrate</div>

              <div class="value">{{validNode}}</div>
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
                  style="width: 68%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="1000"
                >
                  {{totalOutput}}
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="title">User Revenue(USDT)</div>
              <div class="progress value">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 60%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="1000"
                >
                  {{userRevenue}}
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
  data(){
    return{
      participant:{},
      totalOutput:{},
      userRevenue:{},
      validNode:{}
    }
  },
  created() {
    this.apieth();

    // Simple POST request with a JSON body using axios
  },
  methods: {
    async apieth() {
      
     axios
        .get("http://103.74.102.25/system",{
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Methods": "*"
          },
        })
        .then((res) => {
        this.participant=res.data.data[0].participant;
        this.totalOutput=res.data.data[0].totalOutputEth;
        this.userRevenue= res.data.data[0].userRevenueUsdt;
        this.validNode=res.data.data[0].currentHashrate;
     
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
