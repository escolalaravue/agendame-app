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
                />
              </template>
            </v-card>
          </template>
        </v-dialog>
      </template>
    </v-list-item>
  </v-list>
</template>

<script setup>
import {TrashIcon} from 'vue-tabler-icons';

defineProps({
  invitations: {
    type: Array,
    required: true
  }
})
</script>
