<script setup lang="ts">
import Card from "./Card/Card.vue";
import StyledText from "./StyledText/StyledText.vue";
import AddUserItem from "./AddUserItem/AddUserItem.vue";
</script>

<template>
  <Card paddingBottom="12px">
    <div class="card-content">
      <StyledText weight="bold" size="medium" as="h2">
        This is a list
      </StyledText>
      <StyledText as="p">This is some regular text</StyledText>
      <ul class="user-list">
        <AddUserItem
          :user="{
            userId: '1',
            name: 'John Stevens',
            location: 'San Francisco, CA',
          }"
        />
        <AddUserItem
          :user="{ userId: '2', name: 'Laura Thomas', location: 'Oakland, CA' }"
        />
        <AddUserItem
          :user="{
            userId: '3',
            name: 'Janet Wilson',
            location: 'Santa Clara, CA',
          }"
        />
      </ul>
    </div>
  </Card>
</template>

<style scoped>
.card-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-unit-medium);
}
.user-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
