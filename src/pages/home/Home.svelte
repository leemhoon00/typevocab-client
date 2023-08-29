<script>
  import { user } from "@src/store.js";

  function tempFunction() {
    console.log($user);
  }
</script>

<h1>HOME</h1>
<button on:click={tempFunction}>ddd</button>
