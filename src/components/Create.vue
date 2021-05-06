<template>
<div>
    <div class="content-create">
        <div class="create-logo">
            <img style="float: center" src="../assets/Group 254.png" alt="" >
        </div>
        
        <div class="form-create">
            <h4> Create New Project </h4>
            <div class="form-group">
                <p for="create-project-name">Project Name</p>
                <input type="text" class="form-control" id="projectName" placeholder="input Project Name">
            </div>
            <div class="form-group">
                <p for="project-desc">Description Project</p>
                <input type="text" class="form-control" id="projectDesc" placeholder="input Description Project">
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
  name: "Create",
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>