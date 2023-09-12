<script>
  export let index;
  export let word;
  export let focus;

  let buttonIndex;

  import { getSpeech } from "@api/vocabApi";
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

  async function streamToBlob(stream) {
    const reader = stream.getReader();
    const chunks = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      chunks.push(value);
    }
    return new Blob(chunks, { type: "audio/mpeg" });
  }

  async function handlerInput(e) {
    if (e.keyCode === 13) {
      dispatch("plusEvent");
      e.preventDefault();
      const TTSWord =
        e.target.parentNode.parentNode.querySelector(
          'input[name="word"]',
        ).value;
      const result = await getSpeech(TTSWord);

      const blob = await streamToBlob(result);

      const audioUrl = URL.createObjectURL(blob);
      const audioElement = new Audio(audioUrl);
      audioElement.play();
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
