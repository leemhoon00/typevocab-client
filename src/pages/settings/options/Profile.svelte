<script>
  import { onMount } from "svelte";
  import { getUser, updateUser } from "@api/userApi";

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
  };
</script>

<div>
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
</div>

<style>
  h3 {
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
  }

  .form-control {
    margin-bottom: 1rem;
  }
</style>
