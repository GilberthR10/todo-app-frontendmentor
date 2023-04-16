<script setup lang="ts">
import IconCheck from './icons/IconCheck.vue'
import IconCross from './icons/IconCross.vue'
import useTodoList from '@/composables/useTodos'

type Todo = {
  task: string
  id: string
  status: boolean
}

const { completedTodo, deleteTodo } = useTodoList()

const props = defineProps<Todo>()
</script>
<template>
  <li
    class="flex w-full cursor-move items-center justify-center bg-white py-3 pl-2 dark:bg-grayish"
  >
    <div
      @click="completedTodo(props.id)"
      v-if="props.status"
      class="rounded-full bg-gradient-to-br from-linear-blue to-linear-pink px-2 py-2"
    >
      <IconCheck class="cursor-pointer" />
    </div>
    <div
      @click="completedTodo(props.id)"
      v-else
      class="cursor-pointer rounded-full border bg-white px-3 py-3 transition-all duration-300 dark:border-slate-600 dark:bg-grayish"
    ></div>

    <div
      class="w-full cursor-move rounded-md border-none p-3 font-normal text-slate-900 outline-none ring-0 focus:outline-0 dark:text-gray-400"
      :class="{ 'text-gray-400 line-through': props.status }"
    >
      {{ props.task }}
    </div>
    <IconCross class="mr-4 cursor-pointer" @click="deleteTodo(props.id)" />
  </li>
</template>
