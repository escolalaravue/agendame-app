<template>
  <v-list class="pa-0" density="compact">
    <v-list-item
      v-for="member in members"
      :key="member.id"
      class="pa-0"
    >
      <div class="d-flex ga-2 align-center">
        <div>
          {{ member.first_name }} ({{ member.email }})
        </div>
        <div>
          <v-dialog width="auto">
            <template #activator="{ props: activatorProps }">
              <v-chip
                size="small"
                variant="tonal"
                class="ml-2"
                v-bind="activatorProps"
              >
                {{ member.role }}
              </v-chip>
            </template>

            <template #default="{ isActive }">
              <v-card width="400">
                <v-card-title>Atualizar cargo</v-card-title>

                <v-card-text>
                  <v-form>
                    <v-select
                      label="Cargo"
                      variant="outlined"
                      color="primary"
                      :items="[
                          {
                            label: 'Admin',
                            value: 1
                          },
                          {
                            label: 'Atendente',
                            value: 2
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
                        type="submit"
                        flat
                        color="primary"
                        text="Atualizar cargo"
                      />
                    </div>
                  </v-form>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>

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
  members: {
    type: Array,
    default: () => []
  }
})
</script>
