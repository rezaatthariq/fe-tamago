<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="row">
        <div class="col-12" style="float: center">
            <div class="divtask-card-container" type="button">
                <div class="task-card-content"> 
                    <p> -- Isi card -- </p> 
                </div>
                <div class="task-card-footer">
                    <i class="fa fa-calendar-check-o" aria-hidden="true" type="button"></i>
                    <i class="fa fa-tags" aria-hidden="true" type="button"></i>
                    <i class="fa fa-trash" aria-hidden="true" type="button"></i>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCard",
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>