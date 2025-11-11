<script setup lang="ts">
import { ref, computed } from "vue";
import IconArrowDown from "../../assets/IconArrowDown.vue";

interface Option {
  displayName: string;
  value: string;
}

interface Props {
  options: Option[];
  ariaLabel?: string;
  onSelect?: (value: string) => void;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  ariaLabel: undefined,
  onSelect: undefined,
});

const selectedValue = ref<string | undefined>(undefined);
const selectedOption = computed(() => {
  return (
    props.options.find((opt) => opt.value === selectedValue.value) ??
    props.options[0] // default to the first option if no selection is made
  );
});

// called when an option is clicked
const onSelectOption = (value: string) => {
  selectedValue.value = value;
  if (props.onSelect) {
    props.onSelect(value);
  }
};
</script>

<template>
  <div class="dropdown">
    <button
      class="dropdown-trigger"
      type="button"
      role="button"
      :aria-label="
        props.ariaLabel ||
        (selectedOption ? selectedOption.displayName : 'Select an option')
      "
      aria-haspopup="menu"
    >
      <span class="dropdown-trigger-text">
        {{ selectedOption ? selectedOption.displayName : "Select an option" }}
      </span>
      <IconArrowDown class="dropdown-icon" />
    </button>
    <div class="dropdown-list-wrapper">
      <ul
        class="dropdown-list"
        role="menu"
        :aria-label="props.ariaLabel || 'Select an option'"
      >
        <li
          v-for="option in props.options"
          :key="option.value"
          class="dropdown-option"
          role="menuitem"
          :aria-selected="selectedValue === option.value"
          @click="onSelectOption(option.value)"
        >
          {{ option.displayName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  font-family: var(--font-family);
}

.dropdown-trigger {
  width: 100%;
  text-align: left;
  font-family: var(--font-family);
  font-size: var(--select-trigger-font-size);
  font-weight: var(--select-trigger-font-weight);
  letter-spacing: -0.01em;
  color: var(--default-font-color);
  background-color: var(--select-background-color);
  border-radius: var(--select-border-radius);
  border: var(--select-trigger-border);
  padding: var(--select-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &-text {
    flex: 1;
    text-align: left;
  }
}

.dropdown-list-wrapper {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  padding-top: var(--select-options-list-y-offset);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
  pointer-events: none;
}

.dropdown-list {
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  border: var(--select-options-list-border);
  box-shadow: var(--select-options-list-box-shadow);
  border-radius: var(--select-border-radius);
  background-color: var(--select-background-color);
  font-size: var(--select-options-font-size);
  font-weight: var(--select-options-font-weight);
  color: var(--default-font-color);
}

.dropdown:hover .dropdown-list-wrapper {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
}

.dropdown-option {
  padding: var(--select-options-padding-y) var(--select-options-padding-x);
  cursor: pointer;
}

.dropdown-icon {
  width: var(--select-icon-size);
  height: var(--select-icon-size);
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  right: var(--select-icon-padding-right);
  transition: transform 0.2s ease;
}
</style>
