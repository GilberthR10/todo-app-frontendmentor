<script setup lang="ts">
import IconCheck from "./icons/IconCheck.vue";
import IconCross from "./icons/IconCross.vue";
import useTodoList from "@/composables/useTodos";

type Todo = {
  task: string;
  id: string;
  status: boolean;
};

const { completedTodo, deleteTodo } = useTodoList();

const props = defineProps<Todo>();
</script>
<template>
  <div class="flex w-full items-center justify-center py-3 bg-white pl-2">
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
      class="rounded-full border-2 cursor-pointer bg-white px-3 py-3 transition-all duration-300"
    ></div>

    <input
      v-model="props.task"
      class="cursor-pointer w-full rounded-md border-none p-3 font-normal text-slate-900 outline-none ring-0 focus:outline-0"
      :class="{ 'line-through text-gray-400': props.status }"
      type="text"
      placeholder="Create a new todo..."
    />
    <IconCross class="mr-4 cursor-pointer" @click="deleteTodo(props.id)" />
  </div>
</template>
