<script setup lang="ts">
import Card from "./Card/Card.vue";
import StyledText from "./StyledText/StyledText.vue";
import Button from "./Button/Button.vue";
import Dropdown from "./Dropdown/Dropdown.vue";
</script>

<template>
  <Card paddingBottom="27px">
    <div class="card-content">
      <StyledText weight="bold" size="medium" as="h2"> Hello World </StyledText>
      <StyledText as="p">This is some regular text</StyledText>
      <Button>Let's Go</Button>
      <div class="dropdown-container">
        <Dropdown
          :options="[
            { displayName: 'Option 1', value: 'option1' },
            { displayName: 'Option 2', value: 'option2' },
            { displayName: 'Option 3', value: 'option3' },
          ]"
          name="select-example"
        />
      </div>
    </div>
  </Card>
</template>

<style scoped>
.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--spacing-unit-medium);
}
.dropdown-container {
  width: 100%;
}
</style>
