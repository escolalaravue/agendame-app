<template>
  <AcceptInvitationAccept
    v-if="invitation.is_user"
    :token="token"
    :invitation="invitation"
  />

  <AcceptInvitationRegister
    v-else
  />
</template>

<script setup>
import AcceptInvitationAccept from '@/components/AcceptInvitation/AcceptInvitationAccept.vue';
import AcceptInvitationRegister from '@/components/AcceptInvitation/AcceptInvitationRegister.vue';

defineProps({
  token: {
    type: String,
    required: true,
  },
  invitation: {
    type: Object,
    required: true,
  }
})
</script>
