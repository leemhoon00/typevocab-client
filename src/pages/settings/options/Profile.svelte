<script>
  import { onMount } from "svelte";
  import { user } from "@src/store.js";
  import { getUser, updateUser, deleteUser } from "@api/userApi";
  import { replace } from "svelte-spa-router";
  import ImageSelect from "./sub-components/Image-select.svelte";

  let name = "";
  let email = "";
  let bio = "";
  let company = "";

  onMount(async () => {
    const user = await getUser();
    name = user.name;
    email = user.email;
    bio = user.bio;
    company = user.company;
  });

  const updateButtonEvent = async () => {
    const updatedUser = {
      name,
      email,
      bio,
      company,
    };

    const result = await updateUser(updatedUser);

    if (result) {
      user.update((user) => {
        return {
          ...user,
          ...updatedUser,
        };
      });
    }
  };

  const deleteButtonEvent = async () => {
    const result = await deleteUser();

    if (result.success === true) {
      await replace("/");
      location.reload();
    } else {
      alert("Fail");
    }
  };
</script>

<div class="col-6">
  <h3>Profile</h3>
  <form>
    <label for="inputName" class="form-label">Name</label>
    <input
      type="text"
      class="form-control"
      id="inputName"
      name="name"
      bind:value={name}
    />

    <label for="inputEmail" class="form-label">Email</label>
    <input
      type="text"
      class="form-control"
      id="inputEmail"
      name="email"
      bind:value={email}
    />

    <label for="inputBio" class="form-label">Bio</label>
    <textarea class="form-control" id="inputBio" name="bio" bind:value={bio}
    ></textarea>

    <label for="inputCompany" class="form-label">Company</label>
    <input
      type="text"
      class="form-control"
      id="inputCompany"
      name="company"
      bind:value={company}
    />

    <button
      type="button"
      on:click|preventDefault={updateButtonEvent}
      class="btn btn-success">Update profile</button
    >
  </form>

  <h3>Danger</h3>
  <button class="btn btn-danger" on:click={deleteButtonEvent}
    >Delete Account</button
  >
</div>

<ImageSelect />

<style>
  .form-control {
    margin-bottom: 1rem;
  }

  form {
    margin-bottom: 3rem;
  }
</style>
