<template>
<div>
    <AppWithdrawableVue/>
</div>
<div> <AppWithDrawVue/>
</div>
<div>
    <AppTabaleReward/>
</div>

</template>

<script>
import AppWithdrawableVue from '../AppWithdrawable.vue';
import AppWithDrawVue from '../AppWithDraw.vue';
import AppTabaleReward  from '../AppTabaleReward.vue';
    export default {
        name: "LayoutPeronal",
        components:{
            AppWithdrawableVue,
            AppWithDrawVue,
            AppTabaleReward     
        }
    }

</script>
<style>
</style>