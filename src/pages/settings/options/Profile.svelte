<script>
  // import { onMount } from 'svelte';
  // import { user } from '../../../stores/user';

  // onMount(async () => {
  //   const res = await fetch('');
  //   const data = await res.json();
  //   user.set(data);
  // });
</script>

<div>
  <h3>Profile</h3>
  <form>
    <label for="inputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="inputName" name="name" />

    <label for="inputEmail" class="form-label">Email</label>
    <input type="text" class="form-control" id="inputEmail" name="email" />

    <label for="inputBio" class="form-label">Bio</label>
    <textarea class="form-control" id="inputBio" name="bio"></textarea>

    <label for="inputCompany" class="form-label">Company</label>
    <input type="text" class="form-control" id="inputCompany" name="company" />

    <button type="submit" class="btn btn-success">Update profile</button>
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
