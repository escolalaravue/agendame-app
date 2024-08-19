<template>
  <v-dialog width="auto">
    <template #activator="{ props: activatorProps }">
      <v-btn
        variant="tonal"
        color="error"
        size="small"
        v-bind="activatorProps"
      >Remover
      </v-btn>
    </template>

    <template #default="{ isActive }">
      <v-card
        :prepend-icon="TrashIcon"
        title="Tem certeza que deseja remover?"
      >
        <template #actions>
          <v-spacer></v-spacer>

          <v-btn
            flat
            text="Cancelar"
            @click="isActive.value = false"
          />

          <v-btn
            flat
            variant="tonal"
            color="error"
            text="Remover"
            :loading="isLoading"
            @click="removeInvitation"
          />
        </template>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import {TrashIcon} from 'vue-tabler-icons';
import {useTeamsStore} from '@/store/teams';
import {ref} from 'vue';

const emit = defineEmits(['done'])
const props = defineProps({
  invitationId: {
    type: Number,
    required: true
  }
})

const teamStore = useTeamsStore()
const isLoading = ref(false)

async function removeInvitation() {
  isLoading.value = true
  await teamStore.removeTeamInvitation(props.invitationId)
  emit('done')
  isLoading.value = false
}
</script>
