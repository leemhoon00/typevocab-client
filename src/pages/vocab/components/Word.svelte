<script>
  export let index;
  export let word;

  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  onMount(() => {
    const wordInput = document.querySelector(
      `input[name="word"][tabindex="${index * 2}"]`,
    );
    wordInput.focus();
  });

  function handlerInput(e) {
    if (e.keyCode === 13) {
      dispatch("plusEvent");
      e.preventDefault();
    }
  }
</script>

<tr>
  <td class="text-center align-middle">{index}</td>
  <td
    ><input
      name="word"
      type="text"
      class="form-control form-control-sm"
      value={word.word}
      tabindex={index * 2}
    /></td
  >
  <td
    ><input
      name="meaning"
      type="text"
      class="form-control form-control-sm"
      value={word.meaning}
      on:keydown={handlerInput}
      tabindex={index * 2 + 1}
    /></td
  >
</tr>
