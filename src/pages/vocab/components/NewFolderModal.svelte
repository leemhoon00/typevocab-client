<script>
  import { onMount } from "svelte";
  import { createFolder, getFolders } from "@api/vocabApi";
  import { folders } from "@stores/vocab.js";

  onMount(() => {
    // 모달이 표시되면 input 요소에 포커스를 설정
    const modal = document.getElementById("folderModal");
    modal.addEventListener("shown.bs.modal", function () {
      document.getElementById("newFolderInput").focus();
    });

    modal.addEventListener("hidden.bs.modal", function () {
      document.getElementById("newFolderInput").value = "";
    });
  });

  async function onKeyDown(e) {
    if (e.keyCode === 13) {
      const result = await createFolder(e.target.value);
      if (result) {
        // 폴더 생성 성공
        // 모달 닫기
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("folderModal"),
        );
        modal.hide();
        // 폴더 목록 갱신 - TODO

        folders.update((currentValue) => {
          currentValue.push({
            _id: result._id,
            title: result.title,
          });
          return currentValue;
        });
      } else {
        // 폴더 생성 실패
        alert("폴더 생성에 실패했습니다.");
      }
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
