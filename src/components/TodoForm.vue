<script setup lang="ts">
import { ref } from "vue";
import useTodoList from "@/composables/useTodos";
import IconCheck from "./icons/IconCheck.vue";
const todo = ref("");
const status = ref(false);
const { addTodo } = useTodoList();

const createTodo = () => {
  if (todo.value.length === 0) {
    return;
  }
  const uniqueId = new Date().getTime().toString();
  addTodo({ task: todo.value, status: status.value, id: uniqueId });
  todo.value = "";
  status.value = false;
};

const toggleStatus = () => {
  status.value = !status.value;
};
</script>

<template>
  <form class="w-full" @submit.prevent="createTodo">
    <div
      class="flex w-full items-center justify-center rounded-md bg-white pl-2 shadow-md"
    >
      <div
        v-if="status"
        @click="toggleStatus"
        class="rounded-full bg-gradient-to-br from-linear-blue to-linear-pink px-2 py-2"
      >
        <IconCheck />
      </div>

      <div
        @click="toggleStatus"
        v-else
        class="m-auto rounded-full border bg-white px-3 py-3"
      ></div>

      <input
        v-model="todo"
        class="w-full rounded-md border-none p-3 font-normal text-slate-900 outline-none ring-0 focus:outline-0"
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  </form>
</template>
