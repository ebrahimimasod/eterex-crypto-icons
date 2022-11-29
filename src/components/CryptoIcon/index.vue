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
.c-crypto-icon{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}

.c-crypto-icon:hover{
  filter: drop-shadow(0px 0px 10px #2307DC);
  transition: all 0.5s ease-in-out;
}
</style>