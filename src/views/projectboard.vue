<template>
<div>
    <Sidenav />
    <div class="main">
        <!--Header-->
        <div class="fixed-top judul-page">
            <p class="top-bar">
                Nama Project
            </p>
        </div>
        <!--End Header-->
        <div class="content-home-bg">
          <ProjectDetail />
          <EditProject />
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Sidenav from "@/components/Sidenav.vue";
import ProjectDetail from "@/components/ProjectDetail.vue";
import EditProject from "@/components/EditProject.vue";

export default {
  name: "projectboard",
  components: {
    Sidenav, ProjectDetail, EditProject
  },
};


</script>

<style lang="css">
@import "../css/navbar.css";
</style>