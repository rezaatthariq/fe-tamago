<template>
<div>
    <Sidenav />
    <div class="main">
        <!--Header-->
        <div class="fixed-top judul-page">
            <p class="top-bar">
                Profile
            </p>
        </div>
        <!--End Header-->
        <div class="content-home-bg">
          <div class="content-profile">
            <div class="name-foto">
                <p> Sitti Ufairoh Azzahra </p>
                <img class="mx-auto d-block rounded-circle" src="" alt="">
            </div>    
            <div class="form-profile">
                <form class="form-login">
                    <div class="form-group">
                        <p for="fname">First Name</p>
                        <input type="text" class="form-control" id="firstname" placeholder="Sitti">
                    </div>
                    <div class="form-group">
                        <p for="lname">Last Name</p>
                        <input type="text" class="form-control" id="lastname" placeholder="Ufairoh">
                    </div>
                    <div class="form-group">
                        <p for="id">My User ID</p>
                        <input type="text" class="form-control" id="userid" placeholder="Ufairhxa">
                    </div>
                    <h4> Change Password </h4>
                    <div class="form-group">
                        <p for="oldpass">Old Password</p>
                        <input type="text" class="form-control" id="oldpassword" placeholder="old-password">
                    </div>
                    <div class="form-group">
                        <p for="newpass">New Password</p>
                        <input type="text" class="form-control" id="newpassword" placeholder="new-password">
                    </div>
                    <div class="form-group">
                        <p for="confpass">Confirm Password</p>
                        <input type="text" class="form-control" id="confirmpass" placeholder="confirm-password">
                    </div>
                    <button type="submit" class="btn-profile">
                        <p>Save Changes</p>
                    </button>
                </form>
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
  name: "profile",
  components: {
    Sidenav,
  },
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>