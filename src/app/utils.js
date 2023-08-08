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

function handleDelete(id) {
    console.log("id", id);
    return () => {
      const newList = [...todoList];
      newList.splice(id, 1);
      console.log(newList);
      todoList = newList;
    };
  }

export {addElement, handleSort, handleDelete };