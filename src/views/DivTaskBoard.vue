<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Sidenav />
    <div class="main">
      <!--Header-->
      <div class="fixed-top judul-page">
        <p class="top-bar">Nama Divisi</p>
      </div>
      <div class="content-home-bg">
        <div class="task-board-container">
          <div class="row">
            <div class="col-3" style="float: center">
              <div class="task-board-top">
                <p>
                  TO DO
                  <i class="fa fa-plus" type="button" style="float: right"></i>
                </p>
              </div>
            </div>
            <div class="col-3" style="float: center">
              <div class="task-board-top">
                <p>
                  In Progress
                  <i class="fa fa-plus" type="button" style="float: right"></i>
                </p>
              </div>
            </div>
            <div class="col-3" style="float: center">
              <div class="task-board-top">
                <p>
                  Ready
                  <i class="fa fa-plus" type="button" style="float: right"></i>
                </p>
              </div>
            </div>
            <div class="col-3" style="float: center">
              <div class="task-board-top">
                <p>
                  Complete
                  <i class="fa fa-plus" type="button" style="float: right"></i>
                </p>
              </div>
            </div>
          </div>
          <AddTaskCard />
        </div>
      </div>
      <!--End Header-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidenav from "@/components/Sidenav.vue";
import AddTaskCard from "@/components/AddTaskCard.vue";

export default {
  name: "DivTaskBoard",
  components: {
    Sidenav, AddTaskCard
  },
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>