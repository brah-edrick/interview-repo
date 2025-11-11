<script setup lang="ts">
import { ref, computed } from "vue";
import IconArrowDown from "../../assets/IconArrowDown.vue";

interface Option {
  displayName: string;
  value: string;
}

interface Props {
  options: Option[];
  nativeSelect?: boolean;
  name: string;
  ariaLabel?: string;
  onSelect?: (value: string) => void;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  nativeSelect: false,
  name: undefined,
  ariaLabel: undefined,
  onSelect: undefined,
});

const listboxId = props.name ? `${props.name}-listbox` : undefined; // for accessibility

const isOpen = ref(false);

const selectedValue = ref<string | undefined>(undefined);
const selectedOption = computed(() => {
  return (
    props.options.find((opt) => opt.value === selectedValue.value) ??
    props.options[0] //default to the first option if no selection is made
  );
});

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

// called when an option is clicked in the non-native select
const onSelectOption = (value: string) => {
  selectedValue.value = value;
  isOpen.value = false;
  if (props.onSelect) {
    props.onSelect(value);
  }
};

// called when a native select option is changed
const handleNativeSelectChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  if (props.onSelect) {
    props.onSelect(target.value);
  }
};
</script>

<template>
  <div v-if="props.nativeSelect" class="select-wrapper">
    <select
      class="select-trigger"
      :name="props.name"
      @change="handleNativeSelectChange"
      aria-label="Select an option"
    >
      <
      <option
        v-for="option in props.options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.displayName }}
      </option>
    </select>
    <IconArrowDown class="select-icon" />
  </div>
  <div v-else class="select-non-native">
    <input
      v-if="props.name"
      type="hidden"
      :name="props.name"
      :value="selectedValue"
    />
    <button
      class="select-trigger"
      type="button"
      role="combobox"
      @click="toggleOpen"
      :aria-label="
        props.ariaLabel ||
        (selectedOption ? selectedOption.displayName : 'Select an option')
      "
      :aria-expanded="isOpen"
      :aria-controls="listboxId"
      aria-haspopup="listbox"
    >
      <span class="select-trigger-text">
        {{ selectedOption ? selectedOption.displayName : "Select an option" }}
      </span>
      <IconArrowDown
        class="select-icon"
        :class="{ 'select-icon-open': isOpen }"
      />
    </button>
    <ul
      v-show="isOpen"
      :id="listboxId"
      class="select-list"
      role="listbox"
      :aria-label="props.ariaLabel || 'Select an option'"
    >
      <li
        v-for="option in props.options"
        :key="option.value"
        class="select-option"
        role="option"
        :aria-selected="selectedValue === option.value"
        @click="onSelectOption(option.value)"
      >
        {{ option.displayName }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Select Wrapper Styles */
.select-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

/* Native Select Styles */
.select-wrapper select {
  -webkit-appearance: none; /* For Safari */
  -moz-appearance: none; /* For Firefox */
  appearance: none; /* Standard */
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
  box-shadow: var(--select-box-shadow);
  cursor: pointer;
}
/* End Native Select Styles */

/* Non-Native Select Styles */
.select-non-native {
  position: relative;
  font-family: var(--font-family);
}

.select-trigger {
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
  box-shadow: var(--select-box-shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.select-trigger-text {
  flex: 1;
  text-align: left;
}

.select-list {
  position: absolute;
  top: calc(100% + var(--select-options-list-y-offset));
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1000;
  /* for lack of a spec, we'll just hardcode the max height for now */
  max-height: 200px;
  overflow-y: auto;
  border: var(--select-options-list-border);
  box-shadow: var(--select-options-list-box-shadow);
  border-radius: var(--select-border-radius);
  background-color: var(--select-background-color);
  font-size: var(--select-options-font-size);
  font-weight: var(--select-options-font-weight);
  color: var(--default-font-color);
}

.select-option {
  padding: var(--select-options-padding-y) var(--select-options-padding-x);
  cursor: pointer;
}

/* .select-option:hover {
  background-color: var(--select-options-hover-background-color);
}

.select-option[aria-selected="true"] {
  background-color: var(--select-options-selected-background-color);
  color: var(--select-options-selected-color);
} */

/* End Non-Native Select Styles */

/* Select Icon Styles */
.select-icon {
  width: var(--select-icon-size);
  height: var(--select-icon-size);
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  right: var(--select-icon-padding-right);
}
</style>
