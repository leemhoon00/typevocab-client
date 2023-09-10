<script>
  function handlerClickButton() {
    console.log("vocabButton");
  }
</script>

<li>
  <button on:click={handlerClickButton} class="rounded btn small hoverable"
    >ㅇㅇㅇㅇ</button
  >
</li>

<style>
  button {
    --bs-btn-font-size: 0.875rem;
    padding: 0;
  }
</style>
