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
        <DivisiCard />
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Sidenav from "@/components/Sidenav.vue";
import ProjectDetail from "@/components/ProjectDetail.vue";
import DivisiCard from "@/components/divisiCard.vue";

export default {
  name: "projectboard",
  components: {
    Sidenav, ProjectDetail, DivisiCard
  },
};


</script>

<style lang="css">
@import "../css/navbar.css";
</style>