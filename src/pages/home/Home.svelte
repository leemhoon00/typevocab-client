<script>
  import { user } from "@stores/user";
  function tempFunction() {
    const message = new SpeechSynthesisUtterance();
    message.lang = "en-US";
    message.pitch = 1;
    message.rate = 1;
    message.text = "HELLO WORLD";
    message.volume = 1;

    window.speechSynthesis.speak(message);
  }
</script>

<h1>home</h1>

<button on:click={tempFunction}>dddd</button>
