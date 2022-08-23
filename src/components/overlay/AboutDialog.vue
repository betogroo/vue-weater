<script setup lang="ts">
interface Props {
  dialogActive: boolean
}
withDefaults(defineProps<Props>(), {
  dialogActive: false
})
</script>

<template>
  <v-dialog
    v-bind:model-value="dialogActive"
    @click:outside="$emit('OnClose-dialog')"
  >
    <v-card>
      <v-card-title>About</v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-title>How to Works</v-card-title>
      <v-card-text>
        <ol>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing illum excepturi
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing illum excepturi
            inci
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing illum excepturi
            incidunt
          </li>
          <li>Lorem ipsum dolor sit amet consectetur a incidunt quas sint</li>
        </ol>
      </v-card-text>
      <v-card-title>About</v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="$emit('OnClose-dialog')"
          >Close Dialog</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
