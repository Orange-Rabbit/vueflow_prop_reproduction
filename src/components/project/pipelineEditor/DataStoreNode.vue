<template>
  <v-sheet class="rounded-pill flowhub-nodes__datastore py-2" color="pink-lighten-5">
    <v-row class="mx-2 pl-5 pr-5 py-2">
      <span class="text-datastore font-weight-medium text-base">DATA STORE</span>
      <v-icon class="ml-2 pt-1" icon="lucide:circle-arrow-out-up-right" color="datastore" size="small"></v-icon>
    </v-row>
    <Handle :id="`datastore`" type="target" :position="`${Position.Left}`">
    </Handle>
  </v-sheet>
</template>

<script setup>
import { VSheet, VIcon } from 'vuetify/components';
import { Position, Handle } from '@vue-flow/core';

defineProps({
  data: Object
})

</script>
<style scoped>
.vue-flow__handle {
  height: 12px;
  width: 12px;
  background: #ffffff;
  border-radius: 100%;
  border: 1px solid;
  border-color: rgb(var(--v-theme-datastore));
}

.flowhub-nodes__datastore {
  border: 1px solid rgb(var(--v-theme-datastore));
}
</style>