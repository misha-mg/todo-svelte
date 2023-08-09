<script>
  import { fade } from "svelte/transition";
  export let todoList;
  export let handleSort;
  export let sortCount;
  export let setTodo;
</script>

<div transition:fade class="items-info">
  <div id="total-item" class="total-item active">
    Total: {todoList.length}
  </div>
  <div id="done-item" class="done-item active">
    Done: {todoList.filter((item) => item.isChecked === true).length}
  </div>
  <button
    class="list-item__button list-item__sort"
    on:click={() => {
      [todoList, sortCount] = handleSort(todoList, sortCount);
      todoList = todoList;
      setTodo(todoList);
    }}>SORT</button
  >
</div>
