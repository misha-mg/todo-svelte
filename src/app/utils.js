function addElement(event, inputText, id, todoList) {
  if (event.key !== "Enter" || inputText.length == 0) return [inputText, id, todoList];
  id += 1;
  todoList = [...todoList, { id: id, item: inputText, isChecked: false }];
  inputText = "";
  return [inputText, id, todoList]
}

function handleSort(todoList, sortCount) {
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
    return [todoList, sortCount]
  }
}
  function handleDelete(e, todoList, setTodo) {
    let id = e.getAttribute("data-id");
    return () => {
      const newList = [...todoList];
      newList.splice(id, 1);
      setTodo(newList)
    };
  }

export {addElement, handleSort, handleDelete };