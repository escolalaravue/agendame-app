<template>
  <div>
    <div class="mb-4">
      <h2>Entrar para o time {{ invitation.team }} do AgendaMe.</h2>
    </div>

    <v-btn
      text="Aceitar Convite"
      flat
      block
      color="primary"
      size="large"
      :loading="isLoading"
      @click="accept"
    />
  </div>
</template>

<script setup>
import {useTeamsStore} from '@/store/teams';
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const props = defineProps({
  token: {
    type: String,
    required: true,
  },
  invitation: {
    type: Object,
    required: true,
  }
})

const teamStore = useTeamsStore()
const isLoading = ref(false)
const router = useRouter()

async function accept() {
  isLoading.value = true
  await teamStore.acceptTeamInvitation(props.token)
  isLoading.value = false
  router.push({ name: 'login' })
}
</script>
