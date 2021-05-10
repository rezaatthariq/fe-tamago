<template>
<div class="create-div">
    <div class="content-create">
        <div class="create-logo">
            <img style="float: center" src="../assets/folder 1.png" alt="" >
        </div>
        
        <div class="form-create">
            <h4> Create New Division </h4>
            <div class="form-group">
                <p for="create-project-name">Division Name</p>
                <input type="text" class="form-control" id="projectName" placeholder="input Division Name">
            </div>
            <button type="submit" class="btn-create">
                <p>Create</p>
            </button>
        </div>
    </div>
    <!-- End Sidebar -->
</div>


</template>

<script>
export default {
  name: "CreateDivision",
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>