<script setup lang="ts">
import IconEmptyStateAvatarAlt from "../../assets/IconEmptyStateAvatarAlt.vue";
import IconPlus from "../../assets/IconPlus.vue";
import StyledText from "../StyledText/StyledText.vue";

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

    <div class="user-info">
      <StyledText as="span" size="default">
        {{ user.name }}
      </StyledText>
      <StyledText as="span" size="small" color="gray-300">
        {{ user.location }}
      </StyledText>
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
  padding: var(--spacing-unit-default) 0;
}

.avatar {
  aspect-ratio: 1/1;
  border-radius: var(--border-radius-full);
  width: 40px;
}

.user-info {
  flex: 1;
  display: flex;
  flex-direction: column;
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
</style>
