<script>
  import { isLoggedIn } from "../store.js";

  let isLoggedInValue;

  isLoggedIn.subscribe((value) => {
    isLoggedInValue = value;
  });
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#/">Home</a>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">단어장</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">문제</a>
        </li>
      </ul>
      <div class="dropstart" id="profile">
        <button
          type="button"
          class="btn dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          IMG
        </button>
        <ul class="dropdown-menu">
          {#if !isLoggedInValue}
            <li><a class="dropdown-item" href="#/login">로그인</a></li>
          {:else}
            <li><a class="dropdown-item" href="#">Action two</a></li>
          {/if}
        </ul>
      </div>
    </div>
  </div>
</nav>

<style>
  #profile {
    margin-left: auto;
  }

  .navbar {
    padding: 0.5rem 1rem;
  }

  .dropstart .dropdown-toggle::before {
    content: none;
  }
</style>
