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
        <ProjectDetail />
        <CreateDivision />
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Sidenav from "@/components/Sidenav.vue";
import ProjectDetail from "@/components/ProjectDetail.vue";
import CreateDivision from "@/components/CreateDivision.vue";

export default {
  name: "projectboard",
  components: {
    Sidenav, ProjectDetail, CreateDivision
  },
};


</script>

<style lang="css">
@import "../css/navbar.css";
</style>