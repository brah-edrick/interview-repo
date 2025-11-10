<script setup lang="ts">
import { computed } from "vue";

type Alignment = "start" | "center" | "end";

interface Props {
  alignX?: Alignment;
  alignY?: Alignment;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  minHeight?: string;
}

const alignMap: Record<Alignment, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

const props = withDefaults(defineProps<Props>(), {
  alignX: undefined,
  alignY: undefined,
  paddingTop: undefined,
  paddingRight: undefined,
  paddingBottom: undefined,
  paddingLeft: undefined,
  minHeight: undefined,
});

// prop controlled overrides to the default card style
const cardStyle = computed(() => {
  const style: Record<string, string> = {};

  if (props.alignX || props.alignY) {
    if (props.alignY) {
      style.justifyContent = alignMap[props.alignY];
    }

    if (props.alignX) {
      style.alignItems = alignMap[props.alignX];
    }
  }

  if (props.paddingTop) style.paddingTop = props.paddingTop;
  if (props.paddingRight) style.paddingRight = props.paddingRight;
  if (props.paddingBottom) style.paddingBottom = props.paddingBottom;
  if (props.paddingLeft) style.paddingLeft = props.paddingLeft;

  if (props.minHeight) style.minHeight = props.minHeight;

  return style;
});
</script>

<template>
  <div class="card" :style="cardStyle">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;

  background-color: var(--card-background-color);
  border-radius: var(--card-border-radius);
  border: var(--card-border);
  padding: var(--card-padding);
  box-shadow: var(--card-box-shadow);
}
</style>
