<template>
  <v-row justify="center" class="fill-height">
    <v-col>
      <div class="text-xl text-grey-darken-4 font-weight-bold">Create Pipelines</div>
      <v-sheet border rounded="xl" height="85%" color="grey-lighten-4">
        <v-container class="fill-height pa-0" fluid>
          <VueFlow :nodes="nodes" :edges="edges" edgesUpdatable :edge-updater-radius="30" connectOnClick
            elevateEdgesOnSelect>
            <template #node-datasource="dataSourceNodeProps">
              <DataSourceNode v-bind="dataSourceNodeProps"></DataSourceNode>
            </template>
            <template #node-task="taskNodeProps">
              <TaskNode v-bind="taskNodeProps"></TaskNode>
            </template>
            <template #node-datastore="dataStoreNodeProps">
              <DataStoreNode v-bind="dataStoreNodeProps"></DataStoreNode>
            </template>
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

import DataSourceNode from '@/components/project/pipelineEditor/DataSourceNode.vue';
import TaskNode from '@/components/project/pipelineEditor/TaskNode.vue';
import DataStoreNode from '@/components/project/pipelineEditor/DataStoreNode.vue';
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

/*const nodes = ref([
  {
    id: '1',
    type: 'datasource',
    data: {
      suffixes: ['.txt', '.csv']
    },
    position: { x: 50, y: 50 },
    // all nodes can have a data object containing any data you want to pass to the node
    // a label can property can be used for default nodes
  },

  // default node, you can omit `type: 'default'` as it's the fallback type
  {
    id: '2',
    type: 'task',
    position: { x: 350, y: 50 },
    data: { label: 'Task Example' },
  },

  // An output node, specified by using `type: 'output'`
  {
    id: '3',
    type: 'datastore',
    position: { x: 750, y: 50 },
    data: { label: 'Node 3' },
  },
])*/

const instance = useVueFlow()
instance.onConnect((params) => {
  console.log('Triggered event "onConnect" with params: ', params)
  const edgeDefinition = params
  edgeDefinition.type = 'smoothstep'
  instance.addEdges(edgeDefinition)
})

instance.onEdgeUpdate((params) => {
  console.log('Triggered event "onEdgeUpdate" with params: ', params)
  instance.updateEdge(params.edge, params.connection)
})


</script>

<style>
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';
</style>