<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import TodoNavigation from "./TodoNavigation.vue";
import useTodoList from "@/composables/useTodos";

const {
  todoRemaining,
  clearCompleteTodo,
  listItems,
} = useTodoList();

</script>
<template>
  <section class="space-y-10">
    <section
      class="mt-4 flex flex-col divide-y-2
      h-auto min-h-[400px] max-h-[700px]
      overflow-x-hidden overflow-y-auto rounded-lg shadow-md md:mt-8"
    >
      <TodoItem
        v-for="todo in listItems"
        :task="todo.task"
        :status="todo.status"
        :id="todo.id"
      />

      <!-- Footer section -->
      <div class="flex justify-between bg-white p-8 text-gray-400 mt-auto">
        <span class="cursor-pointer"> {{ todoRemaining }} items left </span>
        <span @click="clearCompleteTodo" class="cursor-pointer">
          Clear Complete
        </span>
      </div>
    </section>
    <TodoNavigation />

    <h1 class="text-center text-gray-400/80">Drag and Drop to reorder list</h1>
  </section>
</template>
