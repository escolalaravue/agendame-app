<template>
  <v-dialog
    v-model="modal"
    width="auto">
    <template #activator="{ props: activatorProps }">
      <v-chip
        size="small"
        variant="tonal"
        class="ml-2"
        v-bind="activatorProps"
      >
        {{ memberRole }}
      </v-chip>
    </template>

    <template #default="{ isActive }">
      <v-card width="400">
        <v-card-title>Atualizar cargo</v-card-title>

        <v-card-text>
            <v-select
              v-model="role"
              label="Cargo"
              variant="outlined"
              color="primary"
              :items="[
                  {
                    label: 'Admin',
                    value: 'admin'
                  },
                  {
                    label: 'Atendente',
                    value: 'atendente'
                  }
                ]"
              item-title="label"
              item-value="value"
            />

            <div class="text-right">
              <v-btn
                flat
                text="Cancelar"
                @click="isActive.value = false"
              />

              <v-btn
                flat
                color="primary"
                text="Atualizar cargo"
                :loading="isLoading"
                @click="updateMemberRole"
              />
            </div>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import {ref} from 'vue';
import {useTeamsStore} from '@/store/teams';

const teamStore = useTeamsStore()
const emit = defineEmits(['done'])
const props = defineProps({
  memberId: {
    type: Number,
    required: true,
  },
  memberRole: {
    type: String,
    required: true
  }
})

const modal = ref(false)
const role = ref(props.memberRole)
const isLoading = ref()
async function updateMemberRole() {
  isLoading.value = true
  await teamStore.updateTeamMemberRole(props.memberId, role.value)
  emit('done', role.value)
  modal.value = false
  isLoading.value = false
}
</script>
