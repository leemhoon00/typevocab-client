<script>
  import { onMount } from "svelte";
  import { user } from "@src/store";
  import { getUser } from "@api/userApi";

  import Settingbar from "./Settingbar.svelte";

  onMount(async () => {
    const newUser = await getUser();
    user.update((user) => {
      return {
        ...user,
        ...newUser,
      };
    });
    const imgResponse = await fetch(newUser.image);
    const imgBlob = await imgResponse.blob();
    const imgUrl = URL.createObjectURL(imgBlob);
    document.getElementById("settingButton").src = imgUrl;
  });
</script>

<nav class="navbar navbar-expand-sm bg-body-tertiary">
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
          <a class="nav-link" aria-current="page" href="#">단어장</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">문제</a>
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
    background-color: pink;
    width: 2rem;
    height: 2rem;
  }

  .navbar {
    padding: 0.5rem 1rem;
    padding-right: 0;
  }
</style>
