<template>
<div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="sidenav">
        <div class="row">
            <div class="col-12"> <img class="navbar-brand" src="../assets/logo-tamago.png" alt="" />
            </div>
        </div>
        <a href="#home" class="{$active['Dashboard']}"> <i class="fa fa-home"></i>Home</a>
        <a href="#profile" class="{$active['profile']}"><i class="fa fa-user"></i>Profile</a>
        <a href="#logout" class="{$active['logout']}"><i class="fa fa-sign-out"></i>Log Out</a>
    </div>
    <!-- End Sidebar -->
</div>


</template>

<script>
export default {
  name: "Sidenav",
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>