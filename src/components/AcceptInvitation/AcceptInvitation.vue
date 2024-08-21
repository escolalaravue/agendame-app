<template>
  <AcceptInvitationAccept
    v-if="isUser"
    :token="token"
    :invitation="invitation"
  />

  <AcceptInvitationRegister
    v-else
    :invitation="invitation"
    @done="isUser = true"
  />
</template>

<script setup>
import AcceptInvitationAccept from '@/components/AcceptInvitation/AcceptInvitationAccept.vue';
import AcceptInvitationRegister from '@/components/AcceptInvitation/AcceptInvitationRegister.vue';
import {ref} from 'vue';

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

const isUser = ref(props.invitation.is_user)
</script>
