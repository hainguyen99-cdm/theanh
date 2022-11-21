<template>
  <div class="history text-light">
    <ul class="nav nav-pills mb-3 d-flex justify-content-evenly" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Home
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          Profile
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          Contact
        </button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <TableWithdrawVue />
      </div>
      <div
        class="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        <TableOutputVue />
      </div>
      <div
        class="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
      >
        <TabaleRewardVue />
      </div>
    </div>
  </div>
</template>
<script>
import TabaleRewardVue from "./TabaleReward.vue";
import TableOutputVue from "./TableOutput.vue";
import TableWithdrawVue from "./TableWithdraw.vue";
export default {
  name: "AppTabaleReward",
  components: {
    TabaleRewardVue,
    TableOutputVue,
    TableWithdrawVue,
  },
};
</script>

<style scoped>
.history{
  
  border-radius: 10px;
  margin-top: 10px;
  background: rgb(217, 221, 240)
}
</style>
