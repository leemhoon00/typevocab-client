<script>
  import { user } from "@stores/user";
  function tempFunction() {
    console.log($user);
  }
</script>

<h1>home</h1>

<button on:click={tempFunction}>dddd</button>
