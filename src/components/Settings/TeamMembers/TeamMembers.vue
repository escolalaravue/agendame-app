<template>
  <v-card elevation="10">
    <v-card-item class="pa-6">
      <v-row>
        <v-col>
          <v-card-title class="text-h5 mb-4">Membros</v-card-title>
        </v-col>

        <v-col class="text-right">
          <TeamMemberInviteButton />
        </v-col>
      </v-row>

      <v-progress-circular
        :width="2"
        size="20"
        color="primary"
        indeterminate
      />

      <TeamMembersActive />

      <TeamMembersPending />
    </v-card-item>
  </v-card>
</template>

<script setup>
import TeamMembersActive from '@/components/Settings/TeamMembers/TeamMembersActive.vue';
import TeamMembersPending from '@/components/Settings/TeamMembers/TeamMembersPending.vue';
import TeamMemberInviteButton from '@/components/Settings/TeamMembers/TeamMemberInviteButton.vue';
</script>
