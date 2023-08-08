<script>
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";

  export let isChecked;
  export let item;
  export let index;
  export let todoList;
  export let handleDelete;

  function handleCheck(id) {
    todoList[id].isChecked = !todoList[id].isChecked;
  }
</script>

<div class="list-item--content">
  <input
    bind:checked={isChecked}
    type="checkbox"
    on:click={() => handleCheck(index)}
  />
  <span class="list-item__text" class:checked={isChecked == true}>{item}</span>
</div>
<button
  class="list-item__button list-item__delete"
  on:click={handleDelete(index)}>Delete</button
>

<style>
  input[type="checkbox"] {
    min-width: 20px;
    min-height: 20px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    margin-right: 20px;
    display: flex;
    justify-self: center;
    align-items: center;
    color: #9ed6d7;
  }
  .list-item {
    width: 70%;
    margin: 10px 0px;
    padding: 10px 15px;
    background-color: #9ed6d7;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .list-item__text {
    font-weight: 500;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-align: left;
  }
  .list-item--content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    word-wrap: break-word;
    max-width: 80%;
    overflow: hidden;
  }
  .list-item__button {
    margin: 0;
    border: none;
    border-radius: 3px;
    outline: none;
    background-color: #6cc5c6;
    transition: all 0.2s;
  }
  .list-item__button:hover {
    background-color: #025959;
    color: #6cc5c6;
  }
  .list-item__sort {
    margin-left: 15px;
    width: 70px;
  }
  .checked {
    text-decoration: line-through;
    color: #388686;
  }
  .items-info {
    display: flex;
    /* justify-content: flex-start; */
    align-items: center;
    margin: 0 auto;
    width: 55%;
  }
  .items-info {
    display: flex;
    /* justify-content: flex-start; */
    align-items: center;
    margin: 0 auto;
    width: 55%;
  }
  .total-item {
    margin-right: 15px;
  }
</style>
