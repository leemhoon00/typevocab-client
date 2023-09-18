<script>
  export let vocabulary;

  import { getWords } from "@api/vocabApi";
  import { selectedVocab } from "@stores/vocab";

  async function handlerClickButton() {
    selectedVocab.update(async () => {
      const result = await getWords(vocabulary._id);
      const data = {
        vocabularyName: vocabulary.vocabularyName,
        _id: vocabulary._id,
        words: result,
      };
      return data;
    });
  }
</script>

<li>
  <button on:click={handlerClickButton} class="rounded btn small hoverable"
    >{vocabulary.vocabularyName}</button
  >
</li>

<style>
  button {
    --bs-btn-font-size: 0.875rem;
    padding: 0;
    width: 100%;
    text-align: start;
  }
</style>
