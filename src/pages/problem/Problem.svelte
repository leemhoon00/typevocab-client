<script>
  import { onMount } from "svelte";
  import { folders } from "@stores/problem";
  import { getFolders, createProblem } from "@api/vocabApi";

  import WorkSheet from "./WorkSheet.svelte";

  let selectedFolder = null;
  let randomOption = false;
  let problem = null;

  onMount(async () => {
    const foldersJson = await getFolders();
    folders.set(foldersJson);
  });

  function folderClickHandler(e) {
    selectedFolder = e.target.innerText;
    document.getElementById("folderBtn").innerText = selectedFolder;
  }

  function vocaClickHandler(e) {
    e.target.querySelector("input").checked =
      !e.target.querySelector("input").checked;
  }

  function selectAllHandler(e) {
    const target = e.target.querySelector("input");
    target.checked = !target.checked;
    const vocaCheckboxes = document.querySelectorAll(".vocaCheckbox");
    for (let vocaCheckbox of vocaCheckboxes) {
      vocaCheckbox.checked = target.checked;
    }
  }

  async function createProblemHandler() {
    const selectedVocas = [];
    document.querySelectorAll(".vocaCheckbox").forEach((checkbox) => {
      if (checkbox.checked) {
        selectedVocas.push(checkbox.value);
      }
    });

    const result = await createProblem(randomOption, selectedVocas);

    if (result) {
      problem = result;
    } else {
      console.log("문제 생성 실패");
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<div class="container">
  <div class="row">
    <div class="col-4">
      <div class="dropdown">
        <button
          id="folderBtn"
          class="btn dropdown-toggle hoverable"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          폴더
        </button>
        <ul class="dropdown-menu" on:click={folderClickHandler}>
          {#each $folders as folder}
            <li><button class="dropdown-item">{folder.folderName}</button></li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="col-4">
      <div class="dropdown">
        <button
          class="btn dropdown-toggle hoverable"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          {#key selectedFolder}
            {#if selectedFolder}
              단어장({$folders.find(
                (folder) => folder.folderName === selectedFolder,
              ).vocabularies.length})
            {:else}
              단어장
            {/if}
          {/key}
        </button>
        <ul class="dropdown-menu vocaDropdown">
          <ul class="list-group">
            {#key selectedFolder}
              {#if selectedFolder}
                <li
                  class="list-group-item hoverable transparent-background"
                  on:click={selectAllHandler}
                >
                  <div class="form-check">
                    <input
                      type="checkbox"
                      id="all"
                      class="form-check-input"
                    /><label for="all" class="form-check-label hoverable"
                      >전체선택</label
                    >
                  </div>
                </li>
                {#each $folders.find((folder) => folder.folderName === selectedFolder).vocabularies as voca}
                  <li
                    class="list-group-item hoverable transparent-background"
                    on:click={vocaClickHandler}
                  >
                    <div class="form-check">
                      <input
                        type="checkbox"
                        id={voca._id}
                        class="form-check-input vocaCheckbox"
                        value={voca._id}
                      /><label for={voca._id} class="form-check-label hoverable"
                        >{voca.vocabularyName}</label
                      >
                    </div>
                  </li>
                {/each}
              {/if}
            {/key}
          </ul>
        </ul>
      </div>
    </div>

    <div class="col-2 text-center">
      <input
        type="checkbox"
        class="btn-check"
        id="btn-check-outlined"
        autocomplete="off"
        bind:checked={randomOption}
      />
      <label class="btn btn-outline-warning" for="btn-check-outlined"
        >랜덤</label
      ><br />
    </div>
    <div class="col-2 text-center">
      <button class="btn hoverable" on:click={createProblemHandler}
        >문제만들기</button
      >
    </div>
  </div>
  {#if problem}
    <WorkSheet bind:problem />
  {/if}
</div>

<style>
  .container {
    height: 100%;
  }
  .dropdown-toggle {
    border: none;
    width: 100%;
  }

  .container {
    padding-top: 2rem;
  }
  .dropdown-menu {
    width: 100%;
  }

  .vocaDropdown {
    border: none;
  }

  .form-check {
    position: relative;
    z-index: -1;
  }

  .form-check-input {
    margin-right: 0.5rem;
  }

  .transparent-background {
    background-color: rgba(
      255,
      255,
      255,
      0
    ); /* 빨간색 배경을 50% 투명하게 설정 */
  }
</style>
