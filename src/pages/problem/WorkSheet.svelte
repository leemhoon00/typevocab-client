<script>
  export let problem;
  import Word from "./Word.svelte";
  import { downloadProblem } from "@utils/pdfUtil";

  function downloadPdf() {
    downloadProblem(problem);
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

<button id="pdfButton" on:click={downloadPdf} class="btn hoverable"
  >pdf출력</button
>
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
  #pdfButton {
    margin-top: 2rem;
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
</style>
