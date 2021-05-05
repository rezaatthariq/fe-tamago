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
        <div v-if="joinProject">
          <transition name="joinModal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" @click="joinProject=false"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                      <img src="" alt="" />
                      <div class="form-group">
                        <h1> Join Project </h1>
                        <label> Project ID </label>
                        <input type="text" class="form-control" v-model="joinProjectID" />\
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>  
          </transition>  
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
    Sidenav,
  },
};


</script>

<style lang="css">
@import "../css/navbar.css";
</style>