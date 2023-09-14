<script>
  import { onMount } from "svelte";
  import { folders } from "@stores/problem";
  import { getFolders } from "@api/vocabApi";

  let selectedFolder = null;

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
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<div class="container">
  <div class="optionDiv row">
    <div class="col-6">
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
            <li><button class="dropdown-item">{folder.title}</button></li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="col-6">
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
              단어장({$folders.find((folder) => folder.title === selectedFolder)
                .vocabularies.length})
            {:else}
              단어장
            {/if}
          {/key}
        </button>
        <ul class="dropdown-menu vocaDropdown">
          <ul class="list-group">
            {#key selectedFolder}
              {#if selectedFolder}
                {#each $folders.find((folder) => folder.title === selectedFolder).vocabularies as voca}
                  <li
                    class="list-group-item hoverable"
                    on:click={vocaClickHandler}
                  >
                    <div class="form-cehck">
                      <input
                        type="checkbox"
                        id={voca._id}
                        class="form-check-input"
                      /><label for={voca._id} class="form-check-label hoverable"
                        >{voca.title}</label
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
  </div>
</div>

<style>
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

  .form-check-input {
    margin-right: 0.5rem;
  }
</style>
