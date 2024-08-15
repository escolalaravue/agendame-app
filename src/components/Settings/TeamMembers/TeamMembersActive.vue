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
        <TeamMemberKick
          :member-id="member.id"
          @done="onKicked"
        />
      </template>
    </v-list-item>
  </v-list>
</template>

<script setup>
import TeamMemberKick from '@/components/Settings/TeamMembers/TeamMemberKick.vue';

const emit = defineEmits(['kick'])
defineProps({
  members: {
    type: Array,
    default: () => []
  }
})

function onKicked() {
  emit('kick')
}
</script>
