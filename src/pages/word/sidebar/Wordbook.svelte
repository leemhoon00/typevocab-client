<script>
  export let folder;
</script>

<li class="mb-1">
  <button
    class="btn btn-toggle align-items-center rounded collapsed"
    data-bs-toggle="collapse"
    data-bs-target="#{folder._id}-collapse"
    aria-expanded="true"
  >
    {folder.title}
  </button>
  <div class="collapse show" id="{folder._id}-collapse">
    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li>
        <span class="rounded">ㅇㅇㅇㅇ</span>
      </li>
      <li><span class="rounded">ㅇㅇㅇㅇ</span></li>
    </ul>
  </div>
</li>

<style>
  .btn-toggle {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.65);
    background-color: transparent;
    border: 0;
  }
  .btn-toggle:hover,
  .btn-toggle:focus {
    color: rgba(0, 0, 0, 0.85);
    background-color: #d2f4ea;
  }

  .btn-toggle::before {
    width: 1.25em;
    line-height: 0;
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
    transition: transform 0.35s ease;
    transform-origin: 0.5em 50%;
  }

  .btn-toggle[aria-expanded="true"] {
    color: rgba(0, 0, 0, 0.85);
  }
  .btn-toggle[aria-expanded="true"]::before {
    transform: rotate(90deg);
  }

  .btn-toggle-nav span {
    display: inline-flex;
    padding: 0.1875rem 0.5rem;
    margin-top: 0.125rem;
  }

  .btn-toggle-nav span:hover {
    background-color: #d2f4ea;
  }

  .btn-toggle-nav li {
    padding-left: 1rem;
  }
</style>
