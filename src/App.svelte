<script>
  import InputItem from "./copmonents/input-item/InputItem.svelte";
  import FullList from "./copmonents/list/FullList.svelte";
  import ListInfo from "./copmonents/list-info/ListInfo.svelte";
  import "./app.css";

  import { addElement, handleSort, handleDelete } from "./app/utils.js";

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

  <InputItem {inputText} {addElement} {id} {todoList} {setTodo} />

  {#if todoList.length > 0}
    <ListInfo {sortCount} {todoList} {handleSort} {setTodo} />
  {/if}

  <FullList {todoList} {handleDelete} {setTodo} />
</main>
