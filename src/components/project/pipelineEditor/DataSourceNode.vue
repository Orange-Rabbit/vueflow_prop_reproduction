<template>
  <v-sheet color="white" class="flowhub-nodes__datasource">
    <v-container class="fill-height pa-0" fluid>
      <v-col>
        <v-row>
          <v-col class="pa-0">
            <v-sheet color="#f4f7ff" class="py-2">
              <div class="font-weight-bold text-primary-darken-1 mx-4">FILESET</div>
            </v-sheet>
          </v-col>

        </v-row>
        <v-row class="pt-1 px-4">
          <v-col>
            <v-row v-for="(suffix, index) in suffixes" v-bind:key="index" justify="end">
              <span class="text-secondary-darken-1 font-weight-medium text-base mt-3">{{ suffix }}</span>
              <Handle :id="`source-${index}`" type="source" :position="`${Position.Right}`"
                :style="{ top: `${70 + (index * 36)}px` }">
              </Handle>
            </v-row>
            <v-row justify="end" class="mt-8">
              <v-col class="text-right pr-0" @click="addSuffix" style="cursor: pointer;">
                <v-icon icon="lucide:plus" color="primary" class="mt-n1" size="small"></v-icon>
                <span class="px-0 mt-3 text-primary font-weight-medium text-base">Add Suffix</span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { VRow, VCol, VContainer, VSheet, VIcon } from 'vuetify/components';
import { Position, Handle } from '@vue-flow/core';
import { ref } from 'vue'

const suffixes = ref(['.dat', '_new.txt'])

async function addSuffix() {
  const currentAmountOfSuffixes = suffixes.value.length
  suffixes.value.push(`.new-${currentAmountOfSuffixes + 1}`)
}

</script>
<style scoped>
.vue-flow__handle {
  height: 12px;
  width: 12px;
  background: #ffffff;
  border-radius: 100%;
  border: 1px solid;
  border-color: rgb(var(--v-theme-primary));
}

.flowhub-nodes__datasource {
  border: 1px solid rgb(var(--v-theme-primary));
  border-radius: 12px;
  overflow: hidden;
  min-width: 200px
}
</style>