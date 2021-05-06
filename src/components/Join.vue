<template>
<div>
    <div class="content-join">
        <div class="join-logo">
            <img style="float: center" src="../assets/Group 254.png" alt="" >
        </div>
        
        <div class="form-join">
            <h4> Join Project </h4>
            <div class="form-group">
                <p for="join-project">Project ID</p>
                <input type="text" class="form-control" id="joinID" placeholder="input ID Project">
            </div>
            <button type="submit" class="btn-join">
                <p>Join</p>
            </button>
        </div>
    </div>
    <!-- End Sidebar -->
</div>


</template>

<script>
export default {
  name: "Join",
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>