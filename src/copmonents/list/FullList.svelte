<script>
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import ListItem from "../list-item/LlistItem.svelte";

  export let todoList;
  export let handleDelete;
  export let setTodo;
</script>

<div class="list">
  {#each todoList as todo, i (todo.id)}
    <div
      transition:fade={{ duration: 200 }}
      animate:flip={{ duration: 300 }}
      class="list-item"
    >
      <ListItem
        isChecked={todo.isChecked}
        item={todo.item}
        index={i}
        {todoList}
        {handleDelete}
        {setTodo}
      />
    </div>
  {/each}
</div>
