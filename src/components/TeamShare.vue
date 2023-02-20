<template>
  <div class="team text-light">
    <div class="title ">
      <h2>Team Profile</h2>
    </div>
    <div v-if="account!='Not connect'">
    <div class="d-flex bd-highlight mb-2" >
      <div class="p-2 bd-highlight">Address</div>
      <div class="ms-auto p-2 bd-highlight">{{account}}</div>
    </div>
    <div class="d-flex bd-highlight mb-2">
      <div class="p-2 bd-highlight">Number of teams</div>
      <div class="ms-auto p-2 bd-highlight">0</div>
    </div>
    <div class="d-flex bd-highlight mb-2">
      <div class="p-2 bd-highlight">Team commission</div>
      <div class="ms-auto p-2 bd-highlight">0.00ETH</div>
    </div>
    <div class="d-flex bd-highlight mb-2">
      <div class="p-2 bd-highlight">Yesterday's commission</div>
      <div class="ms-auto p-2 bd-highlight">0.00ETH</div>
    </div>
    <div class="d-flex bd-highlight mb-2">
      <div class="p-2 bd-highlight">level 1</div>
      <div class="ms-auto p-2 bd-highlight">0/0.00ETH</div>
    </div>
    <div class="d-flex bd-highlight mb-2">
      <div class="p-2 bd-highlight">level 2</div>
      <div class="ms-auto p-2 bd-highlight">0/0.00ETH</div>
    </div>
  </div>
</div>
  <div class="team" style="margin-top:10px ;">
    <div>
      <div class="title text-light">
        <h2>Share friends</h2>
      </div>
      <div class="container">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <button
            class="btn btn-success  text-light"
            type="button"
            id="button-addon1"
          >
            Coppy
          </button>
        </div>
      </div>
    </div>
    <div>
      <table class="table text-light">
        <thead>
          <tr>
            <th scope="col">Level</th>
            <th scope="col">Interval</th>
            <th scope="col">Rebate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">VIP1</th>
            <td>9-300</td>
            <td>lev1:10.00% <br />lev2:10.00%</td>
          </tr>
          <tr>
            <th scope="row">VIP2</th>
            <td>301-3000</td>
            <td>lev1:10.00% <br />lev2:10.00%</td>
          </tr>
          <tr>
            <th scope="row">VIP3</th>
            <td>3001-10000</td>
            <td>lev1:10.00% <br />lev2:10.00%</td>
          </tr>
          <tr>
            <th scope="row">VIP4</th>
            <td>10001-20000</td>
            <td>lev1:10.00% <br />lev2:10.00%</td>
          </tr>
          <tr>
            <th scope="row">VIP5</th>
            <td>20001-100000</td>
            <td>lev1:10.00% <br />lev2:10.00%</td>
          </tr>
          <tr>
            <th scope="row">VIP6</th>
            <td>100001-200000</td>
            <td>lev1:10.00% <br />lev2:10.00%</td>
          </tr>
          <tr>
            <th scope="row">VIP7</th>
            <td>200001above</td>
            <td>lev1:10.00% <br />lev2:10.00%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "TeamShare",

  data() {
    return {
      account: "Not connect",
    };
  },
  created() {
    this.getAccount();
    this.timer = setInterval(this.fetchData, 3000);
  },

  methods: {
   
    async getAccount() {
      const { ethereum } = window;
      var accounts = [];``
      if (ethereum !== "undefined") {
        accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        this.account = accounts[0];
        const address ={address: accounts[0]};
      console.log(address);
      axios
         .post("/wallet?address",JSON.stringify(address) ,{
           headers: {
             'Content-Type': 'application/json',
             "Access-Control-Allow-Methods": "*"
           },
         })
         .then((res) => {
         console.log(res)
      
         })
         .catch((err) => {
           console.log(err.response);
         },
 
        
         );
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
.team {
  padding: 5px;
  border-radius: 10px;
  background: rgb(28, 37, 77);
}
</style>
