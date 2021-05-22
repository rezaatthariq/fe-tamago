<template>
<div class="task-card-container">
    <div class="task-card-top">
        <p> Add New Task </p>
    </div>
    <div class="task-card">
        <h4> Project Task </h4>
        <div class="form-group">
            <input type="text" class="form-control" id="task-title" placeholder="input Task Title">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="task-title" placeholder="Input Description of Project Task">
        </div>
        <br />
        <h4> Add to Card </h4>
        <div class="addition">
            <div class="row">
                <div class="col-4" style="float: center">
                    <div class="addition-button" type="button">
                        <p> Member </p>
                    </div>
                </div>
                <div class="col-4" style="float: center">
                    <div class="addition-button" type="button">
                        <p> Due Date </p>
                    </div>
                </div>
                <div class="col-4" style="float: center">
                    <div class="addition-button" type="button">
                        <p> Attachment </p>
                    </div>
                </div>
            </div>
        </div>
        <button type="submit" class="btn-submit" style="float: right">
            <p>Create</p>
        </button>
    </div>
</div>


</template>

<script>
export default {
  name: "AddTaskCard",
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>