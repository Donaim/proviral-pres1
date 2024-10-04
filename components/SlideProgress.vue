<script setup lang="ts">
import { SlideCurrentNo } from '@slidev/client/builtin/slidecurrentno.vue'
import { SlidesTotal } from '@slidev/client/builtin/slidestotal.vue'
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0">
     <SlideCurrentNo  /> / <SlidesTotal />
  </div>
</template>
