<script>
  export let sendedVocab;
  import { selectedVocab, folders, onSpeaker } from "@stores/vocab";
  import {
    createWords,
    getWords,
    deleteVocabulary,
    getFolders,
  } from "@api/vocabApi";
  import Word from "./components/Word.svelte";

  let lastWordIndex = sendedVocab.words.length;

  async function handlerSubmit(e) {
    const form = e.target;
    const formData = new FormData(form);
    const words = [];
    const wordList = formData.getAll("word");
    const meaningList = formData.getAll("meaning");
    for (let i = 0; i < wordList.length; i++) {
      if (wordList[i].trim() && meaningList[i].trim()) {
        words.push({
          word: wordList[i],
          meaning: meaningList[i],
        });
      }
    }

    const result = await createWords(sendedVocab._id, words);

    if (result) {
      selectedVocab.update(async () => {
        const result = await getWords(sendedVocab._id);
        const data = {
          vocabularyName: sendedVocab.vocabularyName,
          _id: sendedVocab._id,
          words: result,
        };
        return data;
      });
    } else {
      console.log("단어 생성 실패");
    }
  }

  function handlerPlusEvent() {
    const newWordComponent = new Word({
      target: document.querySelector("tbody"),
      props: {
        index: ++lastWordIndex,
        word: { word: "", meaning: "" },
        focus: true,
      },
    });
    newWordComponent.$on("plusEvent", handlerPlusEvent);
    newWordComponent.$on("removeEvent", removeWordHandler);
  }

  async function handlerDeleteButton() {
    const result = await deleteVocabulary(sendedVocab._id);
    if (result) {
      selectedVocab.update((currentValue) => {
        return null;
      });

      const newFolders = await getFolders();
      if (newFolders) {
        folders.update(() => {
          return newFolders;
        });
      }
    } else {
      alert("단어장 삭제에 실패했습니다.");
    }
  }

  async function removeWordHandler(e) {
    document.querySelector(`.tr-${e.detail}`).remove();

    for (let i = +e.detail; i < lastWordIndex; i++) {
      const wordInput = document.querySelector(
        `input[name="word"][tabindex="${i * 2 + 2}"]`,
      );
      const meaningInput = document.querySelector(
        `input[name="meaning"][tabindex="${i * 2 + 3}"]`,
      );
      wordInput.setAttribute("tabindex", i * 2);
      meaningInput.setAttribute("tabindex", i * 2 + 1);

      const wordLi = document.querySelector(`.tr-${+i + 1}`);
      wordLi.classList.replace(`tr-${i + 1}`, `tr-${i}`);
      wordLi.querySelector("button").innerText = i;
    }

    lastWordIndex--;
  }

  function toggleSpeaker(e) {
    if ($onSpeaker) {
      e.target.src = "/images/volume-mute.svg";
      onSpeaker.update(() => {
        return false;
      });
    } else {
      e.target.src = "/images/volume-up.svg";
      onSpeaker.update(() => {
        return true;
      });
    }
  }
</script>

<main>
  <h1 class="text-center mb-4">
    {sendedVocab.vocabularyName}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      src="/images/volume-up.svg"
      alt=""
      class="hoverable rounded"
      on:click={toggleSpeaker}
    />
  </h1>
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
        {#each sendedVocab.words as word, index}
          <Word
            {word}
            index={index + 1}
            focus={false}
            on:plusEvent={handlerPlusEvent}
            on:removeEvent={removeWordHandler}
          />
        {/each}
      </tbody>
      <tfoot>
        <tr id="plusTr">
          <td colspan="3" class="text-center align-middle"
            ><button
              type="button"
              on:click={handlerPlusEvent}
              class="btn plus hoverable">+</button
            ></td
          >
        </tr>
      </tfoot>
    </table>

    <div>
      <button class="btn btn-success submitButton mt-2 align-self-end"
        >Save</button
      >
      <button
        on:click={handlerDeleteButton}
        type="button"
        class="btn btn-danger mt-2 ms-2">Delete</button
      >
    </div>
  </form>
  <h3 class="text-center discription">Tab : 오른쪽 이동</h3>
  <h3 class="text-center discription">Shift + Tab : 왼쪽 이동</h3>
</main>

<style>
  main {
    overflow-y: auto;
    padding: 2rem;
    margin-bottom: 3rem;
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

  .plus {
    font-size: 1.5rem;
    padding: 0 0.5rem;
    width: 100%;
  }

  td {
    padding: 0;
  }

  h1 {
    position: relative;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
  }

  .discription {
    color: #d4d6d7;
  }
</style>
