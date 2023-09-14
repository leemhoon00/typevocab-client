<script>
  import { onMount } from "svelte";
  import { user } from "@stores/user";
  import { getUser, getImageUrl } from "@api/userApi";

  import Settingbar from "./Settingbar.svelte";

  onMount(async () => {
    const newUser = await getUser();
    user.update((user) => {
      return {
        ...user,
        ...newUser,
      };
    });

    const imageUrl = await getImageUrl(newUser.image);
    if (imageUrl) {
      document.getElementById("settingButton").src = imageUrl;
    }
  });
</script>

<nav class="navbar fixed-top navbar-expand-sm bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#/"
      ><img
        src="./vite.svg"
        alt="Logo"
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />TypeVocab</a
    >

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#/vocab">단어장</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#/problem">문제</a>
        </li>
      </ul>
      <img
        class="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        id="settingButton"
        alt=""
      />
    </div>
  </div>
</nav>

<Settingbar />

<style>
  #settingButton {
    margin-left: auto;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 0;
    margin-right: 1rem;
  }

  .navbar {
    padding: 0.5rem 1rem;
    padding-right: 0;
  }

  a {
    cursor: pointer;
  }
</style>
