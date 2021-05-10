<template>
<div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="detail-project">
        <div class="content-detail-project">
            <p> Project ID </p>
            <div class="id-project">
                <p class="title text-center"> 1235678 </p>
            </div>
            
            <br />
            <p> Description Project </p>
            <div class="desc-project">
                <p> -- ini deskripsi Project -- </p>
            </div>

            <br />
            <button class="btn-create-div">
                <p><i class="fa fa-plus" aria-hidden="true"></i>  Create a New Division Board</p>    
            </button>

            <br />
            <button class="btn-create-div">
                <p><i class="fa fa-plus" aria-hidden="true"></i>  Edit Project and Assign Role</p>
            </button>
        </div>
    </div>
    <!-- End Sidebar -->
</div>


</template>

<script>
export default {
  name: "ProjectDetail",
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>