<script>
  let inputText;
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";

  let todoList = [];
  let id = 0;

  function addElement(event) {
    if (event.key !== "Enter" || inputText.length == 0) return;
    id += 1;

    todoList = [...todoList, { id: id, item: inputText, isChecked: false }];

    inputText = "";
  }

  function handleCheck(id) {
    todoList[id].isChecked = !todoList[id].isChecked;
  }
  function hendleDelete(id) {
    return () => {
      const newList = [...todoList];
      newList.splice(id, 1);
      todoList = newList;
    };
  }

  let sortCount = 1;
  function hendleSort() {
    if (todoList.filter((item) => item.isChecked === true).length >= 1) {
      let newArr = [...todoList];
      if (sortCount == 0) {
        newArr.sort((a, b) => a.id - b.id);
        sortCount += 1;
      } else if (sortCount == 1) {
        newArr.sort((a, b) => a.isChecked - b.isChecked);
        sortCount = 0;
      }
      console.log(sortCount);
      todoList = newArr;
    }
  }
</script>

<main>
  <h1>TODO APP</h1>

  <input
    type="text"
    bind:value={inputText}
    placeholder="new..."
    on:keydown={addElement}
  />

  {#if todoList.length > 0}
    <div transition:fade class="items-info">
      <div id="total-item" class="total-item active">
        Total: {todoList.length}
      </div>
      <div id="done-item" class="done-item active">
        Done: {todoList.filter((item) => item.isChecked === true).length}
      </div>
      <button class="list-item__button list-item__sort" on:click={hendleSort}
        >SORT</button
      >
    </div>
  {/if}

  <div class="list">
    {#each todoList as todo, i (todo.id)}
      <div
        transition:fade={{ duration: 200 }}
        animate:flip={{ duration: 300 }}
        class="list-item"
      >
        <div class="list-item--content">
          <input
            bind:checked={todo.isChecked}
            type="checkbox"
            on:click={() => handleCheck(i)}
          />
          {#if todo.isChecked == true}
            <span class="list-item__text checked">{todo.item}</span>
          {:else}
            <span class="list-item__text">{todo.item}</span>
          {/if}
        </div>
        <button
          class="list-item__button list-item__delete"
          on:click={hendleDelete(i)}>Delete</button
        >
      </div>
    {/each}
  </div>
</main>

<style>
  :global(body) {
    background-color: #def0ee;
  }
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    color: #025959;
  }

  input[type="text"] {
    width: 55%;
    margin: 10px 0px;
    padding: 10px 15px;
    background-color: #9ed6d7;
    border-radius: 10px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    border: none;
    margin: 0 auto;
    margin-bottom: 20px;
    color: #025959;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  input::placeholder {
    color: #025959;
  }
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

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  @media (max-width: 668px) {
    input[type="text"],
    .items-info {
      width: 80%;
    }
    .list-item {
      width: 90%;
    }
    .list-item__delete {
      font-size: 15px;
    }
  }
</style>
