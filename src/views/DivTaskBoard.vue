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
          <TaskCard />
          <!-- <AddTaskCard /> -->
        </div>
      </div>
      <!--End Header-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidenav from "@/components/Sidenav.vue";
// import AddTaskCard from "@/components/AddTaskCard.vue";
import TaskCard from "@/components/TaskCard.vue";
import draggable from "vuedraggable";

export default {
  name: "DivTaskBoard",
  components: {
    Sidenav,
    TaskCard,
    draggable,
  },
  props: ["toDo", "inProgress", "ready", "completed"],
  data() {
    return {
      toDoNew: this.toDo,
      inProgressNew: this.inProgress,
      readyNew: this.ready,
      completedNew: this.completed,
    };
  },
  methods: {
            onAdd(event, status) {
                let id = event.item.getAttribute('data-id');
                axios.patch('/demos/tasks/' + id, {
                    status: status
                }).then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                })
            },
            update() {
                this.toDoNew.map((task, index) => {
                    task.order = index + 1;
                });

                this.inProgressNew.map((task, index) => {
                    task.order = index + 1;
                });

                this.readyNew.map((task, index) => {
                    task.order = index + 1;
                });

                this.completedNew.map((task, index) => {
                    task.order = index + 1;
                });

                let tasks = this.toDoNew.concat(this.inProgressNew);
                let tasks = this.toDoNew.concat(this.readyNew);
                let tasks = this.toDoNew.concat(this.completedNew);
                let tasks = this.inProgressNew.concat(this.readyNew);
                let tasks = this.inProgressNew.concat(this.completedNew);
                let tasks = this.readyNew.concat(this.completedNew);

                axios.put('/demos/tasks/updateAll', {
                    tasks: tasks
                }).then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                })
            }
  }
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>