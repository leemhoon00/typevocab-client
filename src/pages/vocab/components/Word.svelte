<script>
  export let index;
  export let word;
</script>

<tr>
  <td class="text-center align-middle">{index}</td>
  <td
    ><input
      name="word"
      type="text"
      class="form-control form-control-sm"
      value={word.word}
    /></td
  >
  <td
    ><input
      name="meaning"
      type="text"
      class="form-control form-control-sm"
      value={word.meaning}
    /></td
  >
</tr>
