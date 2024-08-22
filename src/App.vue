<template>
  <v-app class="bg-grey-lighten-3">
    <v-main>
      <div class="fill-height pa-5">
        <div class="fill-height bg-white rounded-lg pa-5">
          <RouterView />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>

</script>
<style>
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 2rem;
}
</style>
