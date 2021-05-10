<template>
<div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
                <p> <i class="fa fa-user-plus" aria-hidden="true"></i>  Join Project </p>
              </button>
              <button class="btn-tamago2"> 
                <p> <i class="fa fa-plus" aria-hidden="true"></i>  Create New Project </p>
              </button>
            </div>
            <br>
            <ProjectCard />
          </div>
          
        </div>
        
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Sidenav from "@/components/Sidenav.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "Dashboard",
  components: {
    Sidenav,
    ProjectCard
  },
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>