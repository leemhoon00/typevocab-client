<script>
  import { onMount } from "svelte";
  import { user } from "@src/store";
  import { getImageUrl } from "@api/userApi";

  onMount(async () => {
    user.subscribe(async (user) => {
      const imageUrl = await getImageUrl(user.image);
      document.getElementById("imageSelect").src = imageUrl;
    });
  });

  function imageSelectEvent() {
    console.log("aa");
    document.getElementById("imageInput").click();
  }
</script>

<div class="col-3 right">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <img id="imageSelect" on:click={imageSelectEvent} />
  <input type="file" id="imageInput" />
</div>

<style>
  .right {
    margin-top: 2rem;
    display: relative;
  }

  #imageSelect {
    width: 100%;
    border-radius: 50%;
  }

  #imageSelect::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  #imageInput {
    display: none;
  }
</style>
