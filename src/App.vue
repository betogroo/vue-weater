<script setup lang="ts">
import { ref } from 'vue'
const dialogActive = ref(false)
const toggleDialog = () => {
  dialogActive.value = !dialogActive.value
}
</script>

<template>
  <v-app class="bg-weather-primary">
    <AppBar @toggle-dialog="toggleDialog" />
    <AboutDialog :dialogActive="dialogActive" @on-close-dialog="toggleDialog" />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
