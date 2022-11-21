<template>
    <div> <CardImange /></div>
    <div><AddressBalanceVue/></div>

</template>
<script>
import CardImange from "../CardImange.vue";
import AddressBalanceVue from "../AddressBalance.vue";
export default {
  name: "LayoutHome",
  components:{
    CardImange,
    AddressBalanceVue,
  }
};
</script>
