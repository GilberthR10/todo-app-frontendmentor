<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import TodoNavigation from './TodoNavigation.vue'
import useTodoList from '@/composables/useTodos'
import Draggable from 'vuedraggable'

const { todoRemaining, clearCompleteTodo, listItems, updateTodoList } =
  useTodoList()

const onEnd = () => {
  updateTodoList(listItems.value)
}
</script>
<template>
  <section class="space-y-10">
    <section
      class="mt-4 flex min-h-[400px] flex-col rounded-lg shadow-md dark:bg-grayish md:mt-8"
    >
      <Draggable
        v-model="listItems"
        tag="ul"
        item-key="id"
        ghost-class="ghost"
        @end="onEnd"
        class=""
      >
        <template #item="{ element: todo }">
          <TodoItem
            :key="todo.id"
            :task="todo.task"
            :status="todo.status"
            :id="todo.id"
            class="border-y first:border-none dark:border-gray-600"
          />
        </template>
      </Draggable>

      <!-- Footer section -->
      <div
        class="mt-auto flex justify-between bg-white p-8 text-gray-400 dark:bg-grayish"
      >
        <span class="cursor-pointer"> {{ todoRemaining }} items left </span>
        <TodoNavigation
          class="mt-0 hidden items-center justify-between space-x-5 p-0 shadow-none dark:bg-grayish md:flex"
        />
        <span @click="clearCompleteTodo" class="cursor-pointer">
          Clear Complete
        </span>
      </div>
    </section>
    <TodoNavigation class="dark:bg-grayish md:hidden" />

    <h1 class="text-center text-gray-400/80">Drag and Drop to reorder list</h1>
  </section>
</template>

<style scoped>
.ghost {
  @apply bg-slate-200/50;
}
</style>
