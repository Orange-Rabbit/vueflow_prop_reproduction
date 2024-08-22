<template>
  <v-sheet color="white">
    <v-container class="fill-height pa-0 flowhub-nodes__task" fluid>
      <v-col>
        <v-row>
          <v-col class="pa-0">
            <v-sheet color="#F9FAFB" class="py-2">
              <div class="font-weight-bold text-secondary-darken-1 mx-4">{{ data.label }}</div>
            </v-sheet>
          </v-col>

        </v-row>
        <v-row class="pt-1 px-4 pb-6">
          <v-col>
            <v-row v-for="(input, index) in inputs" v-bind:key="index" justify="start">
              <span class="text-secondary-darken-1 font-weight-medium text-base mt-3">{{ input.name }}</span>
              <Handle :id="`task-target-${index}`" type="target" :position="`${Position.Left}`"
                :style="{ top: `${70 + (index * 36)}px` }">
              </Handle>
            </v-row>
          </v-col>
          <v-col>
            <v-row v-for="(output, index) in outputs" v-bind:key="index" justify="end">
              <span class="text-secondary-darken-1 font-weight-medium text-base mt-3">{{ output }}</span>
              <Handle :id="`task-source-${index}`" type="source" :position="`${Position.Right}`"
                :style="{ top: `${70 + (index * 36)}px` }">
              </Handle>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { VRow, VCol, VContainer, VSheet } from 'vuetify/components';
import { Position, Handle } from '@vue-flow/core';
import { ref } from 'vue'

defineProps({
  data: Object
})

const inputs = ref([{
  name: 'shouldProcess',
  type: 'Boolean'
},
{
  name: '.dat',
  type: 'File'
}
])
const outputs = ref(['.vpcap', 'Boolean'])

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

.flowhub-nodes__task {
  border: 1px solid rgb(var(--v-theme-secondary));
  border-radius: 12px;
  overflow: hidden;
  min-width: 250px
}
</style>