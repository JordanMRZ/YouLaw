<script setup>
import { HugeiconsIcon } from '@hugeicons/vue'

defineProps({
  icon: { type: [Object, Array], required: true },
  size: { type: Number, default: 20 },
  color: { type: String, default: 'currentColor' },
  strokeWidth: { type: Number, default: 1.75 },
})
</script>

<template>
  <HugeiconsIcon
    :icon="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    class="app-huge-icon"
    aria-hidden="true"
  />
</template>
