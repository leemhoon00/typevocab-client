<script>
  import { onMount } from "svelte";

  onMount(() => {
    // 모달이 표시되면 input 요소에 포커스를 설정
    const modal = document.getElementById("folderModal");
    modal.addEventListener("shown.bs.modal", function () {
      document.getElementById("newFolderInput").focus();
    });
  });

  function onKeyDown(e) {
    if (e.keyCode === 13) {
      console.log(e.target.value);
    }
  }
</script>

<!-- Modal -->
<div
  class="modal fade"
  id="folderModal"
  tabindex="-1"
  aria-labelledby="folderModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="folderModalLabel">새 폴더 만들기</h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <input
          type="text"
          class="form-control"
          id="newFolderInput"
          placeholder="New Folder"
          on:keydown={onKeyDown}
        />
      </div>
    </div>
  </div>
</div>
