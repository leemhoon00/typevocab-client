<script>
  export let word;
  export let index;

  function onInputHandler(e) {
    if (e.keyCode === 40 || e.keyCode === 13) {
      // 아래 화살표
      document
        .querySelector(
          `input[tanindex="${+e.target.getAttribute("tanindex") + 1}"]`,
        )
        .focus();
    } else if (e.keyCode === 38) {
      // 위 화살표
      document
        .querySelector(
          `input[tanindex="${+e.target.getAttribute("tanindex") - 1}"]`,
        )
        .focus();
    }
  }
</script>

<tr class="align-middle">
  <td class="text-center align-middle">{index}</td>
  <td class="text-center"><span>{word.word}</span></td>
  <td
    ><input
      name="meaning"
      type="text"
      class="form-control form-control-sm rounded"
      tanindex={index}
      on:keydown={onInputHandler}
      autocomplete="off"
    /></td
  >
  <td class="hide answer"><span>{word.meaning}</span></td>
</tr>

<style>
  td {
    padding: 0.2rem;
  }

  input {
    border: 0;
    box-shadow: none;
  }

  span {
    margin-left: 0.25rem;
    font-size: 0.875rem;
  }
</style>
