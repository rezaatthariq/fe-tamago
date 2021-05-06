<template>
  <div>
    <Sidenav />
    <div class="main">
      <!--Header-->
      <div class="fixed-top judul-page">
        <p class="top-bar">Profile</p>
      </div>
      <!--End Header-->
      <div class="content-home-bg">
        <div class="content-profile">
          <div class="name-foto">
            <p>Sitti Ufairoh Azzahra</p>
            <img class="mx-auto d-block rounded-circle" src="" alt="" />
          </div>
          <div class="form-profile">
            <div>
              <p for="fname">First Name</p>
              <p>Sitti</p>
            </div>
            <div>
              <p for="lname">Last Name</p>
              <p>Ufairoh</p>
            </div>
            <div class="form-group">
              <p for="id">My Username</p>
              <p>Ufairhxa</p>
            </div>
            <button class="btn-warning">
              <p>Edit Profile or Change</p>
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
  name: "showprofile",
  components: {
    Sidenav,
  },
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>