<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import MoonIcon from './icons/IconMoon.vue'
import SunIcon from './icons/IconSun.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <section
    class="mb-6 flex w-full items-center justify-between md:mb-24 md:mt-24"
  >
    <span class="text-3xl text-white md:text-5xl">TODO</span>
    <div class="cursor-pointer">
      <SunIcon
        v-if="isDark"
        @click="toggleDark()"
        class="transition duration-150 ease-out hover:scale-100 md:scale-150"
      />
      <MoonIcon
        class="transition duration-150 ease-out hover:scale-100"
        v-else
        @click="toggleDark()"
      />
    </div>
  </section>
</template>
