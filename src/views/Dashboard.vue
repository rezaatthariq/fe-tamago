<template>
<div>
    <Sidenav />
    <div class="main">
        <!--Header-->
        <div class="fixed-top judul-page">
            <p class="top-bar">
                Home
            </p>
        </div>
        <!--End Header-->
        <div class="content-home-bg">
          <div class="content-home">
            <div class="title-home">
              <p> My Project </p>
            </div>
            <div class="home-menu">
              <button class="btn-tamago" @click="openJoin"> 
                <p> Join Project </p>
              </button>
              <button class="btn-tamago2"> 
                <p> Create New Project </p>
              </button>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Sidenav from "@/components/Sidenav.vue";

export default {
  name: "Dashboard",
  components: {
    Sidenav
  },
};


</script>

<style lang="css">
@import "../css/navbar.css";
</style>