<template>
  <v-card elevation="10">
    <v-card-item class="pa-6">
      <v-row>
        <v-col>
          <v-card-title class="text-h5 mb-4">Membros</v-card-title>
        </v-col>

        <v-col class="text-right">
          <TeamMemberInviteButton/>
        </v-col>
      </v-row>

      <v-progress-circular
        v-if="isLoading"
        :width="2"
        size="20"
        color="primary"
        indeterminate
      />

      <template v-else>
        <TeamMembersActive
          :members="activeMembers"
          @kick="onKick"
        />

        <TeamInvitationsPending
          :invitations="invitationsPending"
        />
      </template>
    </v-card-item>
  </v-card>
</template>

<script setup>
import TeamMembersActive from '@/components/Settings/TeamMembers/TeamMembersActive.vue';
import TeamInvitationsPending from '@/components/Settings/TeamMembers/TeamInvitationsPending.vue';
import TeamMemberInviteButton from '@/components/Settings/TeamMembers/TeamMemberInviteButton.vue';
import {useAsyncState} from '@vueuse/core';
import {useTeamsStore} from '@/store/teams';
import {computed} from 'vue';

const teamStore = useTeamsStore()

const {
  isLoading,
  state,
  execute
} = useAsyncState(() => Promise.all([
  teamStore.getTeamMembers(),
  teamStore.getTeamInvitations(),
]))

const activeMembers = computed(() => state.value?.[0] || [])
const invitationsPending = computed(() => state.value?.[1] || [])

function onKick() {
  execute()
}
</script>
