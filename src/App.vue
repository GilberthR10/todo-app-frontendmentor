<script setup lang="ts">
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import TodoContainer from './components/TodoContainer.vue'
import TodoForm from './components/TodoForm.vue'
</script>

<template>
  <div
    class="m-auto mt-10 h-screen w-screen max-w-2xl space-y-4 p-8 md:p-4 lg:mt-4 2xl:mt-56"
  >
    <ThemeSwitcher />
    <!-- Todo Container -->
    <main class="w-full">
      <TodoForm />
      <TodoContainer />
    </main>
  </div>
</template>
