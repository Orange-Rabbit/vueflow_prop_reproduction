<template>
  <v-sheet color="red">
    <div>Simple Node!</div>
    <Handle :id="`task-source-${index}`" type="source" :position="Position.Bottom">
    </Handle>
  </v-sheet>
</template>

<script setup>
import { VSheet } from 'vuetify/components';
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
  border-color: rgb(var(--v-theme-secondary));
}
</style>