<template>
    <div> <CardImange /></div>
    <div>
      <WalletBalnceVue/>
    </div>
    <div>
      <TableWithdrawable/>
    </div>
    <div><AddressBalanceVue/></div>


</template>
<script>
import CardImange from "../CardImange.vue";
import AddressBalanceVue from "../AddressBalance.vue";
import WalletBalnceVue from "../WalletBalnce.vue";
import TableWithdrawable from "../TableWithdrawable.vue";

export default {
  name: "LayoutHome",
  components:{
    CardImange,
    AddressBalanceVue,
    TableWithdrawable,
    WalletBalnceVue
  }
};
</script>
<style>

</style>
