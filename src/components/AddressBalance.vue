<template>
  <div class="scroll">
    <table class="table  table-borderless text-light">
      <thead>
        <tr>
          <th scope="col">User Output</th>
          <th colspan="3">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="1">{{ address }}</td>
          <td>{{balance}} $</td>
        </tr>
        <tr>
          <td colspan="1">{{ address1 }}</td>
          <td>{{balance1}} $</td>
        </tr>
        <tr>
          <td colspan="1">{{ address2 }}</td>
          <td>{{balance2}} $</td>
        </tr>
        <tr>
          <td colspan="1">{{ address3 }}</td>
          <td>{{balance3}} $</td>
        </tr>
        <tr>
          <td colspan="1">{{ address4 }}</td>
          <td>{{balance4}} $</td>
        </tr>
        <tr>
          <td colspan="1">{{ address5 }}</td>
          <td>{{balance5}} $</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import {ref} from 'vue'
export default {
  name: "AddressBalance",
  data() {
    return {
        address: {},
        balance: {},
      time: "",
    };
  },
  created() {
    this.fetchData();
    this.timer = setInterval(this.fetchData, 3000);
  },
  methods: {
    async fetchData() {
    const data =Math.random()
      this.address = data;
      const dataBalance =Math.floor(Math.random() * 500) + 100;
      this.balance = dataBalance;

      const data1 =Math.random()
      this.address1 = data1;
      const dataBalance1 =Math.floor(Math.random() * 500) + 100;
      this.balance1 = dataBalance1;

      const data2 =Math.random()
      this.address2 = data2;
      const dataBalance2 =Math.floor(Math.random() * 500) + 100;
      this.balance2 = dataBalance2;

      const data3 =Math.random()
      this.address3 = data3;
      const dataBalance3 =Math.floor(Math.random() * 500) + 100;
      this.balance3 = dataBalance3;

      const data4 =Math.random()
      this.address4 = data4;
      const dataBalance4 =Math.floor(Math.random() * 500) + 100;
      this.balance4 = dataBalance4;

      
      const data5 =Math.random()
      this.address5 = data5;
      const dataBalance5 =Math.floor(Math.random() * 500) + 100;
      this.balance5 = dataBalance5;
      
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
  background:rgb(28, 37, 77);
}
</style>
