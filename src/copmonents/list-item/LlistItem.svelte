<script>
  import "./listItem.css";

  export let isChecked;
  export let item;
  export let index;
  export let todoList;
  export let handleDelete;
  export let setTodo;
</script>

<div class="list-item--content">
  <input
    bind:checked={isChecked}
    type="checkbox"
    on:click={() => {
      todoList[index].isChecked = !todoList[index].isChecked;
      setTodo(todoList);
    }}
  />
  <span class="list-item__text" class:checked={isChecked == true}>{item}</span>
</div>
<button
  data-id={index}
  class="list-item__button list-item__delete"
  on:click={handleDelete(this, todoList, setTodo)}>Delete</button
>
