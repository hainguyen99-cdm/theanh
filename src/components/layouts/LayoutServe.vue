<template>
  <div>
    <TableYRateVue />
  
  </div>
  <div>
    <CardServeVue />
  </div>
  <div>
    <ProgramFeaturesVue />
  </div>
  <div>
    <HelpCenterVue />
  </div>
  <div>
  <AuditVue/>
  </div>
  <div>
    <PartnerServeVue/>
  </div>

</template>
<script>
import CardServeVue from "../CardServe.vue";
import TableYRateVue from "../TableYRate.vue";
import ProgramFeaturesVue from "../ProgramFeatures.vue";
import HelpCenterVue from "../HelpCenter.vue";
import PartnerServeVue from "../PartnerServe.vue";
import AuditVue from "../AuditReport.vue";
export default {
  name: "LayoutServe",
  components: {
    CardServeVue,
    TableYRateVue,
    ProgramFeaturesVue,
    HelpCenterVue,
    PartnerServeVue,
    AuditVue,
  },
};
</script>
<style>

</style>
