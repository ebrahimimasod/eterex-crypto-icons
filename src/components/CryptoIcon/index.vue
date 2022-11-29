<script setup>
import {computed, defineProps} from "vue";

const {size, name} = defineProps({
  size: {
    type: Number,
    default: 32,
  },
  name: {
    type: String,
    required: true,
  },
});

const getIconPath = computed(() => `/assets/icons/${name}_.svg`);

</script>

<template>
  <div class="c-crypto-icon">
    <img
        :src="getIconPath"
        :alt="name"
        :style="{width:`${size}px`,height:`${size}px`}"
    >
  </div>
</template>


<style scoped>

</style>