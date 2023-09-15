<script>
  export let index;
  export let word;
  export let focus;

  let buttonIndex;

  import { getSpeech } from "@api/vocabApi";
  import { streamToBlob } from "@utils/vocabUtil";
  import { onMount, createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  onMount(() => {
    const wordInput = document.querySelector(
      `input[name="word"][tabindex="${index * 2}"]`,
    );
    if (focus) {
      wordInput.focus();
    }
  });

  async function wordInputHandler(e) {
    if (e.keyCode === 13) {
      e.preventDefault();

      const result = await getSpeech(e.target.value.trim());
      const blob = await streamToBlob(result);

      const audioUrl = URL.createObjectURL(blob);
      const audioElement = new Audio(audioUrl);
      audioElement.play();
    } else if (e.keyCode === 40) {
      // 아래 화살표
      document
        .querySelector(
          `input[tabindex="${+e.target.getAttribute("tabindex") + 2}"]`,
        )
        .focus();
    } else if (e.keyCode === 38) {
      // 위 화살표
      document
        .querySelector(
          `input[tabindex="${+e.target.getAttribute("tabindex") - 2}"]`,
        )
        .focus();
    }
  }

  async function meaningInputHandler(e) {
    if (e.keyCode === 13) {
      dispatch("plusEvent");
      e.preventDefault();
      const TTSWord = e.target.parentNode.parentNode
        .querySelector('input[name="word"]')
        .value.trim();

      const result = await getSpeech(TTSWord);
      const blob = await streamToBlob(result);

      const audioUrl = URL.createObjectURL(blob);
      const audioElement = new Audio(audioUrl);
      audioElement.play();
    } else if (e.keyCode === 40) {
      // 아래 화살표
      document
        .querySelector(
          `input[tabindex="${+e.target.getAttribute("tabindex") + 2}"]`,
        )
        .focus();
    } else if (e.keyCode === 38) {
      // 위 화살표
      document
        .querySelector(
          `input[tabindex="${+e.target.getAttribute("tabindex") - 2}"]`,
        )
        .focus();
    }
  }

  function removeEvent(e) {
    e.preventDefault();
    dispatch("removeEvent", buttonIndex);
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

<tr class="tr-{index} align-middle">
  <td class="text-center align-middle"
    ><button
      on:mouseenter={mouseEnterHandler}
      on:mouseleave={mouseLeaveHandler}
      on:click={removeEvent}
      class="btn">{index}</button
    ></td
  >
  <td class="wordTd"
    ><input
      name="word"
      id="wordInput"
      type="text"
      class="form-control form-control-sm rounded"
      value={word.word}
      tabindex={index * 2}
      on:keydown={wordInputHandler}
      autocomplete="off"
    /></td
  >
  <td
    ><input
      name="meaning"
      type="text"
      class="form-control form-control-sm rounded"
      value={word.meaning}
      on:keydown={meaningInputHandler}
      tabindex={index * 2 + 1}
      autocomplete="off"
    /></td
  >
</tr>

<style>
  .wordTd {
    padding-right: 0.2rem;
  }
  td {
    padding: 0;
  }

  input {
    border: 0;
    box-shadow: none;
  }
</style>
