<script setup lang="ts">
import RightSidebar from "./components/RightSideBar.vue";
import LeftSidebar from "./components/LeftSideBar.vue";
import Card from "./components/Card/Card.vue";
import StyledText from "./components/StyledText/StyledText.vue";
</script>

<template>
  <div class="app">
    <LeftSidebar class="left-sidebar" />
    <div class="card-container">
      <Card min-height="300px" alignY="center" alignX="center">
        <StyledText as="h3" size="large" weight="bold">Card 1</StyledText>
      </Card>
      <Card min-height="300px" alignY="center" alignX="center">
        <StyledText as="h3" size="large" weight="bold">Card 1</StyledText>
      </Card>
      <Card min-height="300px" alignY="center" alignX="center">
        <StyledText as="h3" size="large" weight="bold">Card 1</StyledText>
      </Card>
    </div>
    <RightSidebar class="right-sidebar" />
  </div>
</template>

<style scoped>
.app {
  background-color: var(--gray-800);
  padding: 40px 120px 64px 120px;
  display: flex;
  gap: var(--spacing-unit-large);
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  max-width: 100%;
}

.left-sidebar,
.right-sidebar {
  align-self: start;
  max-width: var(--sidebar-max-width);
  width: 100%;
}

.card-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-unit-default);
  width: 560px;
}
</style>
