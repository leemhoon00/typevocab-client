<script>
  import { BACKEND_URL } from "@src/config.js";
</script>

<div
  class="offcanvas offcanvas-end"
  tabindex="-1"
  id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel"
>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Profile Section</h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>

  <div class="offcanvas-body">
    <ul class="list-group list-group-flush">
      <a href="#/settings/profile">
        <li class="list-group-item list-group-item-action">
          <span><img src="./images/setting.svg" width="20" alt="" /></span>
          <span>Settings</span>
        </li>
      </a>
      <a href="{BACKEND_URL}/auth/logout">
        <li class="list-group-item list-group-item-action">
          <span>Logout</span>
        </li>
      </a>
    </ul>
  </div>
</div>

<style>
  .offcanvas {
    width: 300px;
    border-radius: 1rem 0 0 1rem;
  }

  .btn-close {
    margin-right: 0.5rem;
  }

  .list-group-item {
    border-radius: 1rem;
    border: none;
    cursor: pointer;
  }

  a {
    width: 100%;
  }
</style>
