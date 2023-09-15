<script>
  export let problem;
  import Word from "./Word.svelte";
  import { downloadAnswer, downloadProblem } from "@utils/pdfUtil";

  function problemClickHandler() {
    downloadProblem(problem);
  }

  function answerClickHandler() {
    downloadAnswer(problem);
  }

  let showAnswer = false;

  function toggleAnswer() {
    document.querySelectorAll(".answer").forEach((element) => {
      element.classList.toggle("hide");
    });
    showAnswer = !showAnswer;

    if (showAnswer) {
      document.querySelectorAll(".wide").forEach((element) => {
        element.style.width = "31.3%";
      });
    } else {
      document.querySelectorAll(".wide").forEach((element) => {
        element.style.width = "47%";
      });
    }
  }
</script>

<div class="dropdown">
  <button
    id="pdfToggleBtn"
    class="btn btn-outline-success hoverable dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    PDF 다운로드
  </button>
  <ul class="dropdown-menu">
    <li>
      <button
        class="dropdown-item d-flex align-items-center hoverable"
        on:click={problemClickHandler}
        >문제지<img src="images/download.svg" alt="" /></button
      >
    </li>
    <li>
      <button
        class="dropdown-item d-flex align-items-center hoverable"
        on:click={answerClickHandler}
        >답지<img src="images/download.svg" alt="" /></button
      >
    </li>
  </ul>
</div>
<table id="problemTable" class="table table-bordered">
  <thead class="text-center">
    <tr>
      <th class="narrow">No.</th>
      <th class="wide">Word</th>
      <th class="wide">Meaning</th>
      <th class="wide hide answer">Answer</th>
    </tr>
  </thead>
  <tbody>
    {#each problem as word, index}
      <Word {word} index={index + 1} />
    {/each}
  </tbody>
  <tfoot>
    <tr id="plusTr">
      <td colspan="4" class="text-center align-middle"
        ><button
          type="button"
          on:click={toggleAnswer}
          class="btn plus hoverable">정답 보기</button
        ></td
      >
    </tr>
  </tfoot>
</table>

<style>
  #pdfToggleBtn {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .narrow {
    width: 6%;
  }

  .wide {
    width: 47%;
  }

  .plus {
    font-size: 1rem;
    padding: 0.5 0.5rem;
    width: 100%;
  }

  td {
    padding: 0;
  }

  img {
    margin-left: auto;
  }
</style>
