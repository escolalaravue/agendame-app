<template>
  <v-list class="pa-0" density="compact">
    <v-list-item
      v-for="invitation in invitations"
      :key="invitation.id"
      class="pa-0"
    >
      {{ invitation.email }}
      <v-chip
        size="small"
        variant="tonal"
        class="ml-2"
      >
        {{ invitation.role }}
      </v-chip>
      <v-chip
        size="small"
        variant="tonal"
        color="warning"
        class="ml-2"
      >
        Pendente
      </v-chip>
      <template #append>
        <TeamInvitationRemove
          :invitation-id="invitation.id"
          @done="() => emit('remove')"
        />
      </template>
    </v-list-item>
  </v-list>
</template>

<script setup>
import TeamInvitationRemove from '@/components/Settings/TeamMembers/TeamInvitationRemove.vue';

const emit = defineEmits(['remove'])
defineProps({
  invitations: {
    type: Array,
    required: true
  }
})
</script>
