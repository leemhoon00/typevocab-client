<script>
  import { onMount } from "svelte";
  import { user } from "@src/store";
  import { getImageUrl, uploadImage, deleteImage } from "@api/userApi";

  onMount(async () => {
    user.subscribe(async (user) => {
      const imageUrl = await getImageUrl(user.image);
      document.getElementById("imageSelect").src = imageUrl;
    });
  });

  function uploadButton() {
    document.getElementById("imageInput").click();
  }

  async function removeButton() {
    const result = await deleteImage();
    if (!result.success) {
      alert("Fail to remove image");
    } else {
      location.reload();
    }
  }

  async function imageChange(e) {
    const file = e.currentTarget.files[0];
    if (file) {
      const response = await uploadImage(file);
      if (!response.success) {
        alert("Fail to upload image");
      } else {
        location.reload();
      }
    }
  }
</script>

<div class="col-3 right dropdown-center">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <img
    id="imageSelect"
    data-bs-toggle="dropdown"
    data-bs-offset="0,-50"
    alt=""
  />
  <ul class="dropdown-menu">
    <div class="list-group">
      <button
        class="list-group-item list-group-item-action"
        on:click={uploadButton}>Upload a photo</button
      >
      <button
        class="list-group-item list-group-item-action"
        on:click={removeButton}>Remove a photo</button
      >
    </div>
  </ul>
</div>

<input type="file" id="imageInput" on:change={imageChange} />

<style>
  .right {
    margin-top: 2rem;
  }

  #imageSelect {
    width: 100%;
    border-radius: 50%;
    cursor: pointer;
  }

  #imageSelect::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  #imageInput {
    display: none;
  }

  .dropdown-menu {
    padding: 0;
    border: none;
  }
</style>
