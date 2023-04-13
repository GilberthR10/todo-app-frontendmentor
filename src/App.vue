<script setup lang="ts">
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import TodoContainer from './components/TodoContainer.vue';
import TodoForm from './components/TodoForm.vue';


</script>

<template>
  <div class="space-y-4 p-4 max-w-2xl mt-10 lg:mt-4 2xl:mt-56 h-screen w-screen m-auto">

    <ThemeSwitcher />
    <!-- Todo Container -->
    <main class="w-full">
      <TodoForm />
      <TodoContainer />
    </main>
  </div>
</template>
