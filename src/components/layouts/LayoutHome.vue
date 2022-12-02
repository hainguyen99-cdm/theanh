<template>
    <div> <CardImange /></div>
    <div>
      <WalletBalnceVue/>
    </div>
    <div><AddressBalanceVue/></div>

</template>
<script>
import CardImange from "../CardImange.vue";
import AddressBalanceVue from "../AddressBalance.vue";
import WalletBalnceVue from "../WalletBalnce.vue";
export default {
  name: "LayoutHome",
  components:{
    CardImange,
    AddressBalanceVue,
    WalletBalnceVue
  }
};
</script>
<style>

</style>
