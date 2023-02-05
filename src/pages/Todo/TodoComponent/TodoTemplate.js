import { useCallback, useEffect, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import TodoInsert from './TodoInsert';
import TodoItemList from './TodoItemList';
import update from 'immutability-helper'
import axios from 'axios';

function TodoTemplate() {
  const [todos, setTodos] = useState([]);

  // todo 데이터 가져오기 api 
  const getTodoData = () => {
    axios.get("http://localhost:8080/todo").then((res)=>{
      console.log("res", res.data);
      setTodos(res.data);
    })
  }

  //Todo 데이터 삭제하기 api
  const removeTodoData = (id) => {
    axios.delete(`http://localhost:8080/todo/${id}`).then(()=>{
      console.log("Success Remove!");
      getTodoData();
    })
  }

  const onRemove = (id) => {
    removeTodoData(id);
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      }),
    );
  };

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setTodos((preTodos) =>
      update(preTodos, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, preTodos[dragIndex]],
        ],
      }),
    );
  }, []);

  useEffect(()=>{
    getTodoData();
  },[])

  return (
    <div>
      <TodoInsert getTodoData={getTodoData}/>
      <DndProvider backend={HTML5Backend}>
        <TodoItemList todos={todos} onRemove={onRemove} onToggle={onToggle} moveCard={moveCard}/>
      </DndProvider>
    </div>
  );
}

export default TodoTemplate;