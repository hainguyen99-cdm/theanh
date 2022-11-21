<template>
  <div class="yrate text-light">
    <div><H3>yield rate</H3></div>
    <div>
      <table class="table table-sm text-light">
        <thead>
          <tr>
            <th scope="col">LEVEL</th>
            <th scope="col">INTERVAL</th>
            <th scope="col">REBATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>VIP1</td>
            <td>9-300</td>
            <td>2.080%</td>
          </tr>
          <tr>
            <td>VIP2</td>
            <td>301-3000</td>
            <td>2.560%</td>
          </tr>
          <tr>
            <td>VIP3</td>
            <td>3001-10000</td>
            <td>3.360%</td>
          </tr>
          <tr>
            <td>VIP4</td>
            <td>10001-20000</td>
            <td>5.280%</td>
          </tr>
          <tr>
            <td>VIP5</td>
            <td>20001-100000</td>
            <td>6.880%</td>
          </tr>
          <tr>
            <td>VIP6</td>
            <td>100001-200000</td>
            <td>8.800%</td>
          </tr>
          <tr>
            <td>VIP7</td>
            <td>200001above</td>
            <td>9.600%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TableYRate",
};
</script>
<style scoped>
.yrate {
  padding-top: 10px;
  border-radius: 10px;
  background: rgb(41, 62, 119);
  
}
table{
  background:rgb(28, 37, 77) ;
}
</style>
