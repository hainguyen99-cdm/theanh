<template>
  <div class="help text-light">
    <div><H3  @click="Helper">Help center</H3></div>
    <div>
      <table id="helper" class="table table-bordered text-light" style="display:none ;">
        <tbody>
          <tr>
            <td>1.How to join node mining?</td>
            <td><p>1. Open the encrypted wallet. visit website</p>
                <p>2. Click [Receive] to join the node and start mining. Follow the steps to complete the activation (the activation process will consume a small miner fee)</p>
                <p>3. After 24 hours, enter the mining pool to check the income.</p>
            </td>
          </tr>
          <tr>
            <td>2.About node mining</td>
            <td>
                <p>Node mining aims to solve the problem of node congestion and high gas cost, and encourage more people to own USDT. We are a mining project that automatically distributes rewards to liquidity providers through smart contracts</p>
            </td>
          </tr>
          <tr>
            <td>3.How my benefits are calculated</td>
            <td><p>Your income comes from how much USDT you have in your crypto wallet. The amount of USDT stored in the wallet can activate the same number of miners! For example: if you deposit 100USDT in your wallet, the daily income is .100*2%=2USDT</p></td>
          </tr>
          <tr>
            <td>4.How to get more USDT earnings</td>
            <td><p>Click Home, Teams. Copy your exclusive promotion link. You can invite your friends or share your exclusive promotion link through various social software. Through your exclusive link friend node, the invitation rewards are as follows → first-level members can get 10% of friends' daily income → second-level members can get 10% of friends' average daily income</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>

export default {
  name: "HelpCenter",
  methods:{
      Helper(){
      
      let a= document.getElementById("helper").style.display;
     if(a=="none"){
      document.getElementById("helper").style.display="block";
     } else{
      document.getElementById("helper").style.display="none"
     }

    }
  }
};
</script>
<style scoped>
.help {
  padding-top: 5px;
  border-radius: 5px;
  background: rgb(41, 62, 119);
}
table{
  background:rgb(28, 37, 77) ;
}
p{
font-size: small;

}
</style>
