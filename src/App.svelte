<script>
  // import Input from "./copmonents/input-item/input.svelte";
  import List from "./copmonents/list/list.svelte";
  import ListData from "./copmonents/list-data/listData.svelte";
  import "./app.css";

  let todoList = [];
  let id = 0;
  let inputText;
  let sortCount = 1;

  function addElement() {
    if (event.key !== "Enter" || inputText.length == 0) return;
    id += 1;
    todoList = [...todoList, { id: id, item: inputText, isChecked: false }];
    inputText = "";
  }

  function handleSort() {
    if (todoList.filter((item) => item.isChecked === true).length >= 1) {
      let newArr = [...todoList];
      if (sortCount == 0) {
        newArr.sort((a, b) => a.id - b.id);
        sortCount += 1;
      } else if (sortCount == 1) {
        newArr.sort((a, b) => a.isChecked - b.isChecked);
        sortCount = 0;
      }
      todoList = newArr;
    }
  }

  function handleDelete(e) {
    let id = e.getAttribute("data-id");
    return () => {
      const newList = [...todoList];
      newList.splice(id, 1);
      todoList = newList;
    };
  }
</script>

<main>
  <h1>TODO APP</h1>

  <!-- <Input {inputText} {addElement} /> -->
  <input
    type="text"
    bind:value={inputText}
    placeholder="new..."
    on:keydown={addElement}
  />

  {#if todoList.length > 0}
    <ListData {todoList} {handleSort} />
  {/if}

  <List {todoList} {handleDelete} />
</main>
