<script>
  import Input from "./copmonents/input-item/Input.svelte";
  import List from "./copmonents/list/List.svelte";
  import ListData from "./copmonents/list-data/ListData.svelte";
  import "./app.css";

  import { addElement, handleSort, handleDelete } from "./app/utils.js";
  import { fade } from "svelte/transition";

  let todoList = [];
  let id = 0;
  let inputText;
  let sortCount = 1;

  function setTodo(arr) {
    todoList = arr;
  }
</script>

<main>
  <h1>TODO APP</h1>

  <Input {inputText} {addElement} {id} {todoList} {setTodo} />

  {#if todoList.length > 0}
    <ListData {sortCount} {todoList} {handleSort} {setTodo} />
  {/if}

  <List {todoList} {handleDelete} {setTodo} />
</main>
