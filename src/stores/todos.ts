import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Todo } from "@/types/todo";

export const useTodosStore = defineStore("todosStore", () => {
  const todoList = ref<Todo[]>([
    {
      task: "Comprar leche",
      id: "1",
      status: true,
    },
    {
      task: "Comprar pan",
      id: "2",
      status: false,
    },
    {
      task: "Comprar huevos",
      id: "3",
      status: true,
    },
    {
      task: "Comprar frutas",
      id: "4",
      status: true,
    },
    {
      task: "Comprar carne",
      id: "5",
      status: false,
    },
    {
      task: "Comprar verduras",
      id: "6",
      status: false,
    },
  ]); //state
  const currentTodoList = ref<number>(1); // state



  const todoListCompleted = computed<Todo[]>(() =>
    todoList.value.filter((todo) => todo.status)
  ); // getter

  const todoListActive = computed<Todo[]>(() =>
    todoList.value.filter((todo) => !todo.status)
  ); // getter

  return {
    // state
    currentTodoList,
    todoList,

    //getters
    todoRemaining: computed(() => todoListActive.value.length),// computed,
    todoListCompleted,
    todoListActive,

    //Actions
    setActiveTodoList(page: number) {
      if (currentTodoList.value === page) return;

      currentTodoList.value = page;
    },

    addTodo(todo: Todo) {

      todoList.value.push({
        task: todo.task,
        status: todo.status,
        id: todo.id,
      });
      /*       todoList.value = [
        {...todo, id: uniqueId },
      ] */
    },

    deleteTodo(id: string) {
      todoList.value = todoList.value.filter((todo) => todo.id !== id);
    },
    clearCompleteTodo() {
      todoList.value = todoList.value.filter((todo) => !todo.status );
    },

    editTodo(todo: Todo) {
      const index = todoList.value.findIndex((t) => t.id === todo.id);

      if (index === -1) {
        return;
      }
      todoList.value.splice(index, 1, todo);
    },

    completedTodo(id: string) {
      const index = todoList.value.findIndex((t) => t.id === id);

      if (index === -1) {
        return;
      }
      todoList.value[index].status = !todoList.value[index].status;
    }
  };
});
