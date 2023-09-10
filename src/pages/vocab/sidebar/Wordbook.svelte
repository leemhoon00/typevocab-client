<script>
  export let folder;
  import { deleteFolder } from "@api/vocabApi";
  import { folders } from "@stores/vocab";

  import VocabButton from "../components/VocabButton.svelte";

  async function deleteButton() {
    const result = await deleteFolder(folder._id);
    if (result) {
      folders.update((currentValue) => {
        return currentValue.filter((f) => f._id !== folder._id);
      });
    } else {
      alert("폴더 삭제에 실패했습니다.");
    }
  }
</script>

<li class="mb-1">
  <div class="d-flex">
    <button
      class="btn btn-toggle hoverable align-items-center rounded collapsed"
      data-bs-toggle="collapse"
      data-bs-target="#{folder._id}-collapse"
      aria-expanded="true"
    >
      {folder.title}
    </button>
    <button class="btn deleteButton hoverable" on:click={deleteButton}
      ><img class="trashImg" src="./images/trash.svg" alt="" /></button
    >
  </div>
  <div class="collapse show" id="{folder._id}-collapse">
    <div class="listDiv">
      <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
        <VocabButton />
      </ul>
      <button class="hoverable btn newVocabButton"
        ><img src="./images/plus.svg" alt="" /></button
      >
    </div>
  </div>
</li>

<style>
  .btn-toggle {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.65);
    border: 0;
  }

  .btn-toggle::before {
    width: 1.25em;
    line-height: 0;
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
    transition: transform 0.35s ease;
    transform-origin: 0.5em 50%;
  }

  .btn-toggle[aria-expanded="true"] {
    color: rgba(0, 0, 0, 0.85);
  }
  .btn-toggle[aria-expanded="true"]::before {
    transform: rotate(90deg);
  }

  .deleteButton {
    margin: 0;
    padding: 0;
    margin-left: auto;
  }

  .listDiv {
    padding-left: 1.1875rem;
  }

  .newVocabButton {
    margin: 0;
    padding: 0;
  }
</style>
