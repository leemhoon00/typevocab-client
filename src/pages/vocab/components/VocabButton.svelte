<script>
  export let vocabulary;

  import { getWords } from "@api/vocabApi";
  import { selectedVocab } from "@stores/vocab";

  async function handlerClickButton() {
    selectedVocab.update(async () => {
      const result = await getWords(vocabulary._id);
      return result;
    });
  }
</script>

<li>
  <button on:click={handlerClickButton} class="rounded btn small hoverable"
    >{vocabulary.title}</button
  >
</li>

<style>
  button {
    --bs-btn-font-size: 0.875rem;
    padding: 0;
  }
</style>
