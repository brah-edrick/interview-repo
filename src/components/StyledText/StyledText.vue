<script setup lang="ts">
interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"; // todo add more if needed in the future
  weight?: "regular" | "medium" | "bold";
  size?: "small" | "default" | "medium" | "large"; // todo add more if needed in the future
  color?: "black" | "gray-300"; // todo add more if needed in the future
}

const props = withDefaults(defineProps<Props>(), {
  as: "span",
  weight: "regular",
  size: "default",
  color: "black",
});
</script>

<template>
  <component
    :is="props.as"
    :class="[
      'styled-text',
      `weight-${props.weight}`,
      `size-${props.size}`,
      `color-${props.color}`,
    ]"
  >
    <slot>StyledText</slot>
  </component>
</template>

<style scoped>
.styled-text {
  font-family: var(--font-family);
  padding: 0;
  margin: 0;
}

/* Weight classes */
.weight-regular {
  font-weight: var(--font-weight-regular);
}

.weight-medium {
  font-weight: var(--font-weight-medium);
}

.weight-bold {
  font-weight: var(--font-weight-bold);
}

/* Size classes */
.size-small {
  font-size: var(--font-size-small);
}

.size-default {
  font-size: var(--font-size-default);
}

.size-medium {
  font-size: var(--font-size-medium);
}

.size-large {
  font-size: var(--font-size-large);
}

/* Color classes */
.color-black {
  color: var(--black);
}

.color-gray-300 {
  color: var(--gray-300);
}
</style>
