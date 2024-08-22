<template>
  <v-row justify="center" class="fill-height">
    <v-col>
      <div class="text-xl text-grey-darken-4 font-weight-bold">Create Pipelines</div>
      <v-sheet border rounded="xl" height="85%" color="grey-lighten-4">
        <v-container class="fill-height pa-0" fluid>
          <VueFlow :nodes="nodes" :edges="edges" edgesUpdatable :edge-updater-radius="30" connectOnClick
            elevateEdgesOnSelect>
            <template #node-simple="simpleNodeProps">
              <SimpleNode v-bind="simpleNodeProps"></SimpleNode>
            </template>
            <Background />
          </VueFlow>
        </v-container>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
import { VRow, VCol, VSheet, VContainer } from 'vuetify/components';
import { VueFlow, useVueFlow } from '@vue-flow/core';
import { Background } from '@vue-flow/background';
import { ref } from 'vue'
import SimpleNode from '@/components/project/pipelineEditor/SimpleNode.vue';

const nodes = ref([
  {
    id: '1',
    type: 'simple',
    position: {
      x: 50, y: 50
    }
  }
])

</script>

<style>
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';
</style>