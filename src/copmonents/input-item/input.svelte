<script>
  export let inputText;
  export let addElement;
</script>

<input
  type="text"
  bind:value={inputText}
  placeholder="new..."
  on:keydown={addElement}
/>
