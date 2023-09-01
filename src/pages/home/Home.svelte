<script>
  import { user } from "@src/store.js";

  async function tempFunction() {
    const response = await fetch("http://localhost:3000/test", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  }
</script>

<h1>HOME</h1>
<button on:click={tempFunction}>ddd</button>
