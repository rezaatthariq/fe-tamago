<template>
  <div class="content-edit-project">
    <div class="row">
      <div class="col-1">
        <div class="edit-logo">
          <img src="../assets/Group 254.png" alt="" style="float: center" />
        </div>
      </div>
      <div class="col-4">
        <div class="form-create">
          <h4>Edit Project</h4>
          <div class="form-group">
            <p for="edit-project-name">Project Name</p>
            <input
              type="text"
              class="form-control"
              id="projectName"
              placeholder="input New Project Name"
            />
            <br />
            <p for="edit-project-name">Description Project</p>
            <input
              type="text"
              class="form-control"
              id="projectDesc"
              placeholder="input New Project Description"
            />
          </div>
          <button type="submit" class="btn-profile">
            <p>Save Changes</p>
          </button>
          <br />
          <br />
          <div class="assign-role">
                <h4>Assign Roles</h4>
              <div class="row">
                <div class="col-7">
                    <p> Reza Viominglaaaaaaaaaaa </p>
                </div>
                <div class="col-5">
                    <div class="role-option" style="float: center">
                        <select name="role" id="roles">
                            <option value="divisi 1"> nama divisi 1 </option>
                        </select>
                    </div>
                </div>
              </div>
            <button type="submit" class="btn-profile">
                <p>Apply Roles</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditProject",
};
</script>

<style lang="css">
@import "../css/navbar.css";
</style>