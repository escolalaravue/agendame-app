<template>
  <div class="authentication">
    <v-container fluid class="pa-3">
      <v-row class="h-100vh d-flex justify-center align-center">
        <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
          <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
            <v-card-item class="pa-sm-8">
              <div class="d-flex justify-center py-4">
                <Logo/>
              </div>
              <div
                v-if="isLoading"
                class="text-center"
              >
                <v-progress-circular
                  indeterminate
                  color="primary"
                />
              </div>

              <v-alert
                v-else-if="error"
                color="error"
                class="mb-2"
              >
                {{ error.message }}
              </v-alert>

              <AcceptInvitation
                v-else
                :token="route.query.token"
                :invitation="state"
              />
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import Logo from '@/layouts/full/logo/Logo.vue';
import AcceptInvitation from '@/components/AcceptInvitation/AcceptInvitation.vue';
import {useTeamsStore} from '@/store/teams';
import {useAsyncState} from '@vueuse/core';
import {useRoute} from 'vue-router';

const teamStore = useTeamsStore()
const route = useRoute()
const {state, isLoading, error} = useAsyncState(() => teamStore.getTeamInvitation(route.query.token))
</script>
