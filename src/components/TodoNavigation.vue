<script setup lang="ts">
import useTodoList from '@/composables/useTodos'

const { setActiveTodoList, currentTodoList } = useTodoList()

const Tabs = [
  { name: 'All', page: 1, isActive: true },
  { name: 'Active', page: 2, isActive: false },
  { name: 'Completed', page: 3, isActive: false },
]
</script>
<template>
  <!-- Nav section -->
  <div
    class="flex items-center justify-evenly rounded-md p-4 text-gray-400 shadow-2xl dark:bg-grayish"
  >
    <span
      v-for="(tab, i) in Tabs"
      :key="i"
      @click="setActiveTodoList(tab.page)"
      :class="{ active: currentTodoList === tab.page }"
      class="cursor-pointer text-center"
    >
      {{ tab.name }}
    </span>
  </div>
</template>

<style scoped>
.active {
  @apply text-primary;
}
</style>
