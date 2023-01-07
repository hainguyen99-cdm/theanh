<template>
  <div>
    <a class="navbar-brand" href="#"
      ><p class="h2 text-light bg-dark fw-bold">ETH mining farm</p></a
    >
      <nav class="mobile-bottom-nav">
      <div class="mobile-bottom-nav__item ">
        <div class="mobile-bottom-nav__item-content" id="1" @click="addClass1" :class="{ 'mobile-bottom-nav__item--active' : isAddClass1}" >
          <a class="nav-link active " aria-current="page" href="/">Home</a>
        </div>
      </div>
      <div class="mobile-bottom-nav__item">
        <div class="mobile-bottom-nav__item-content" id="2" @click="addClass2" :class="{ 'mobile-bottom-nav__item--active' : isAddClass2}">
          <a class="nav-link active " aria-current="page" href="/serve">Serve</a>
        </div>
      </div>
      <div class="mobile-bottom-nav__item">
        <div class="mobile-bottom-nav__item-content" id="3" @click="addClass3" :class="{ 'mobile-bottom-nav__item--active' : isAddClass3}">
            <a class="nav-link active " aria-current="page" href="/team">Team</a>
        </div>
      </div>

      <div class="mobile-bottom-nav__item">
        <div class="mobile-bottom-nav__item-content" id="4" @click="addClass4" :class="{ 'mobile-bottom-nav__item--active' : isAddClass4}">
          <a class="nav-link active " aria-current="page" href="/personal"
            >Personal</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AppNavbar",
  data() {
    return {
      account: "Not connect",
      isAddClass1 : false,
      isAddClass2 : false,
      isAddClass3 : false,
      isAddClass4 : false,
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
      ``;
      if (ethereum !== "undefined") {
        accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        this.account = accounts[0];
        const address = { address: accounts[0] };
        console.log(address);
        axios
          .post(
            "http://103.74.102.25/wallet?address",
            JSON.stringify(address),
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "*",
              },
            }
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    },
    addClass1() {
        this.isAddClass1 = true; 
        this.isAddClass2 = false;
        this.isAddClass3 = false;
        this.isAddClass4 = false;
    },
    addClass2() {
        this.isAddClass2 = true; 
        this.isAddClass1 = false;
        this.isAddClass3 = false;
        this.isAddClass4 = false;
    },
    addClass3() {
        this.isAddClass3 = true; 
        this.isAddClass2 = false;
        this.isAddClass1 = false;
        this.isAddClass4 = false;
    },
    addClass4() {
        this.isAddClass4 = true; 
        this.isAddClass2 = false;
        this.isAddClass3 = false;
        this.isAddClass1 = false;
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
body {
  padding: 10px;
  padding-bottom: 50px;
}
h1 {
  margin-bottom: 2000px;
}

.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  will-change: transform;
  transform: translateZ(0);

  display: flex;

  height: 80px;

  box-shadow: 0 -2px 5px -2px #333;
  background-color: #fff;
}

.mobile-bottom-nav__item {
  flex-grow: 1;
  text-align: center;
  font-size: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mobile-bottom-nav__item--active {
  color: red;
}
.mobile-bottom-nav__item-content {
  display: flex;
  flex-direction: column;
}

a{
  font-weight: bold;
}

</style>
