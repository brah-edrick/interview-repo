<script setup lang="ts">
import IconEmptyStateAvatarAlt from "../../assets/IconEmptyStateAvatarAlt.vue";
import IconPlus from "../../assets/IconPlus.vue";

interface User {
  userId: string;
  name: string;
  location: string;
  imageUrl?: string;
}

interface Props {
  user: User;
  onAdd?: (user: User) => void;
  as?: "li" | "div"; // todo add more if needed in the future
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
});

const handleAdd = () => {
  if (props.onAdd) {
    props.onAdd(props.user);
  }
};
</script>

<template>
  <component :is="props.as" class="add-user-item">
    <!-- AVATAR with fallback to empty state avatar -->
    <img
      class="avatar"
      v-if="user.imageUrl"
      :src="user.imageUrl"
      alt="User Avatar"
    />
    <IconEmptyStateAvatarAlt class="avatar" v-else />

    <div class="add-user-item-info">
      <span class="add-user-item-name">{{ user.name }}</span>
      <span class="add-user-item-location">{{ user.location }}</span>
    </div>
    <button @click="handleAdd" class="add-user-button">
      <IconPlus class="add-user-item-icon" />
    </button>
  </component>
</template>

<style scoped>
.add-user-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-unit-default);
  padding: var(--spacing-unit-default);
}

.avatar {
  aspect-ratio: 1/1;
  border-radius: var(--border-radius-full);
  width: 40px;
}

.add-user-item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.add-user-item-name {
  font-size: var(--font-size-default);
  font-weight: var(--font-weight-medium);
}

.add-user-item-location {
  font-size: var(--font-size-small);
  color: var(--gray-300);
}

.add-user-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  svg {
    aspect-ratio: 1/1;
    width: 22px;
    height: 22px;
  }

  &:hover {
    cursor: pointer;
  }
}

.add-user-item-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
</style>
