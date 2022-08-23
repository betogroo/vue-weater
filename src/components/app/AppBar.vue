<script setup lang="ts">
defineEmits(['toggle-dialog'])
</script>

<template>
  <v-app-bar color="weather-primary" elevation="16">
    <v-app-bar-title>
      <router-link class="app-bar-title text-white" :to="{ name: 'HomeView' }">
        <v-icon>mdi-weather-sunny</v-icon>
        The Weather App
      </router-link>
    </v-app-bar-title>
    <v-btn @click="$emit('toggle-dialog')" icon variant="plain" :ripple="false">
      <v-icon>mdi-information</v-icon>
    </v-btn>
    <v-btn icon variant="plain" :ripple="false">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.app-bar-title {
  text-decoration: none;
}
</style>
