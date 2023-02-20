<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ETH mining farm</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/serve"
              >Serve</a
            >
          </li>
          <li class="nav-item">
            <!-- <router-link to="/team">Team</router-link> -->
            <a class="nav-link active" aria-current="page" href="/team">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/personal"
              >Personal</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-outline-success" type="submit">
            {{ account }}
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
import axios from "axios";
export default {
  name: "AppNavbar",
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
      var accounts = [];
      if (ethereum !== "undefined") {
        accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        this.account = accounts[0];
        const address ={address: accounts[0]};
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
nav {
  border-radius: 5px;
}
</style>
