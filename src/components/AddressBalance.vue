<template>
  <div class="scroll">
    <table class="table table-borderless text-light">
      <thead>
        <tr>
          <th scope="col">User Output</th>
          <th colspan="3">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in myArray" :key="item.id">
          <td colspan="1">{{ item.address }}</td>
          <td>{{ item.dataBalance }} $</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import cryptoRandomString from 'crypto-random-string';
export default {
  name: "AddressBalance",
  data() {
    return {
      myArray: [{
        address: cryptoRandomString({length: 30}),
        dataBalance : Math.floor(Math.random() * 500) + 100
      },{
        address: cryptoRandomString({length: 30}),
        dataBalance : Math.floor(Math.random() * 500) + 100
      },{
        address: cryptoRandomString({length: 30}),
        dataBalance : Math.floor(Math.random() * 500) + 100
      },{
        address: cryptoRandomString({length: 30}),
        dataBalance : Math.floor(Math.random() * 500) + 100
      },{
        address: cryptoRandomString({length: 30}),
        dataBalance : Math.floor(Math.random() * 500) + 100
      },{
        address: cryptoRandomString({length: 30}),
        dataBalance : Math.floor(Math.random() * 500) + 100
      }]
    };
  },
  created() {
    this.fetchData();
    this.timer = setInterval(this.fetchData, 3000);
  },
  methods: {
    async fetchData() {
      {
    for( var i = 0; i<1; i++) {
    if(this.myArray.length >=6){
    this.myArray.splice(5,1); 
    this.myArray.unshift({
        address: cryptoRandomString({length: 30}),
        dataBalance : Math.floor(Math.random() * 500) + 100
      })
    // console.log(this.myArray)
}
}

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
<style>
.table {
  margin-top: 15px;
  border-radius: 5px;
  overflow: hidden;
  background: rgb(28, 37, 77);
}
</style> 



