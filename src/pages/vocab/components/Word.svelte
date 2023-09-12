<script>
  export let index;
  export let word;
  export let focus;

  let buttonIndex;

  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  onMount(() => {
    const wordInput = document.querySelector(
      `input[name="word"][tabindex="${index * 2}"]`,
    );
    if (focus) {
      wordInput.focus();
    }
  });

  function handlerInput(e) {
    if (e.keyCode === 13) {
      dispatch("plusEvent");
      e.preventDefault();
    }
  }

  function removeEvent(e) {
    e.preventDefault();
    dispatch("removeEvent", index);
  }

  function mouseEnterHandler(e) {
    buttonIndex = e.target.innerText;
    e.target.innerText = "-";
    e.target.classList.add("remove");
  }

  function mouseLeaveHandler(e) {
    e.target.innerText = buttonIndex;
    e.target.classList.remove("remove");
  }
</script>

<tr class="tr-{index}">
  <td class="text-center align-middle"
    ><button
      on:mouseenter={mouseEnterHandler}
      on:mouseleave={mouseLeaveHandler}
      on:click={removeEvent}
      class="btn">{index}</button
    ></td
  >
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

<style>
</style>
