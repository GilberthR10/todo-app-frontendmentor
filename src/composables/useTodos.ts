import { storeToRefs } from "pinia";
import { useTodosStore } from "@/stores/todos";
import type { Todo } from '@/types/todo';
import { computed, ref, watchEffect } from "vue";


const useTodoList = () => {
  const store = useTodosStore();

  const { currentTodoList, todoList, todoRemaining, todoListActive, todoListCompleted } = storeToRefs(store);

  const listItems = ref<Todo[]>()

  watchEffect(() => {
    switch (currentTodoList.value) {
      case 2:
        listItems.value = todoListActive.value;
        break;
      case 3:
        listItems.value = todoListCompleted.value;
        break;
      default:
        listItems.value = todoList.value;
        break;
    }
  });


  return {
    // Properties
    currentTodoList,
    todoList,

    // Methods
    setActiveTodoList(activeList: number) {
      store.setActiveTodoList(activeList);
    },
    addTodo(todo: Todo) {
      store.addTodo(todo);
    },
    deleteTodo(id: string){
      store.deleteTodo(id)
    },
    editTodo(todo: Todo) {
      store.editTodo(todo)
    },
    completedTodo(id: string) {
      store.completedTodo(id)
    },
    clearCompleteTodo() {
      store.clearCompleteTodo()
    },
    // Getters
    todoListActive,
    todoListCompleted,
    todoRemaining,
    listItems
  };
};

export default useTodoList;
