<template>
  <span :id="`countup-${props.id}`" class="count-up">{{ props.value }}</span>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { CountUp } from 'countup.js'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})

onMounted(() => {
  const numAnim = new CountUp(`countup-${props.id}`, props.value);
  numAnim.start()
})
</script>

<style lang="scss" scoped>

</style>