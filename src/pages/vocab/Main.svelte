<script>
  export let selectedVocab;
  import { onMount } from "svelte";
  import { createWords } from "@api/vocabApi";

  async function handlerSubmit(e) {
    const form = e.target;
    const formData = new FormData(form);
    const words = [];
    for (let i = 0; i < formData.getAll("word").length; i++) {
      words.push({
        word: formData.getAll("word")[i],
        meaning: formData.getAll("meaning")[i],
      });
    }
    const result = await createWords(selectedVocab._id, words);
    if (result) {
      console.log(result);
    } else {
      console.log("단어 생성 실패");
    }
  }
</script>

<main>
  <h1 class="text-center mb-4">{selectedVocab.title}</h1>
  <form
    on:submit|preventDefault={handlerSubmit}
    id="wordsForm"
    class="d-flex flex-column align-items-end"
  >
    <table class="table table-bordered">
      <thead class="text-center">
        <tr>
          <th class="narrow">No.</th>
          <th class="wide">Word</th>
          <th class="wide">Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center align-middle">1</td>
          <td
            ><input
              name="word"
              type="text"
              class="form-control form-control-sm"
            /></td
          >
          <td
            ><input
              name="meaning"
              type="text"
              class="form-control form-control-sm"
            /></td
          >
        </tr>
      </tbody>
    </table>

    <button class="btn btn-success submitButton mt-2 align-self-end"
      >Save</button
    >
  </form>
</main>

<style>
  main {
    overflow-y: auto;
    padding: 2rem;
  }

  .narrow {
    width: 6%;
  }

  .wide {
    width: 47%;
  }

  form {
    display: flex;
    flex-direction: column; /* 아이템을 세로로 나열 */
    justify-content: flex-end; /* 아이템을 오른쪽 끝에 정렬 */
  }

  .submitButton {
    margin-left: auto;
  }
</style>
