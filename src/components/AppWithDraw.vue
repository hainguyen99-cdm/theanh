<template>
  <div class="withdraw text-light">
    <div><h3>Withdraw with USDT</h3></div>
    <div class="container">
      <form>
        <div class="mb-3 d-flex bd-highlight mb-2">
            <div class="p-2 bd-highlight">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="p-3 bd-highlight">
            <p>Total balance</p>
        </div>
        </div>
        <button type="submit" class="btn btn-primary" style="margin-bottom:10px ;">Confirm</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppWithDraw",
};
</script>
<style scoped>
.withdraw {
  padding-top: 5px;
  border-radius: 5px;
  background: rgb(47, 68, 160);
}
</style>
