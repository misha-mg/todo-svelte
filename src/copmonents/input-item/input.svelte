<script>
  export let inputText;
  export let addElement;
  export let id;
  export let todoList;
  export let setTodo;
</script>

<input
  type="text"
  bind:value={inputText}
  placeholder="new..."
  on:keydown={(event) => {
    [inputText, id, todoList] = addElement(event, inputText, id, todoList);
    setTodo(todoList);
  }}
/>
