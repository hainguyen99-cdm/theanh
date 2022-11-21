<template>
    <Header style="margin-bottom:20px ;">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">ETH mining farm</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/serve">Serve</a>
          </li>
          <li class="nav-item">
            <!-- <router-link to="/team">Team</router-link> -->
            <a class="nav-link active" aria-current="page" href="/team">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/personal">Personal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">connect</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </Header>
</template>
<script>
export default {
  name: "AppNavbar",
};
</script>
