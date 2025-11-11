<script setup lang="ts">
import { type ButtonHTMLAttributes } from "vue";
type ButtonProps = /* @vue-ignore */ ButtonHTMLAttributes; // some Vue compiler shenanigans
const props = defineProps<ButtonProps>();
</script>
<template>
  <button class="button" v-bind="props">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  background-color: var(--button-background-color);
  color: var(--button-color);
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--button-border-radius);
  border: var(--button-border);
  cursor: pointer;
  font-family: var(--button-font-family);
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
}
</style>
