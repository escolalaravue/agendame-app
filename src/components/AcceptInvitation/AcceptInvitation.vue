<template>
  {{ invitation }}
  <AcceptInvitationAccept />
  <AcceptInvitationRegister />
</template>

<script setup>
import AcceptInvitationAccept from '@/components/AcceptInvitation/AcceptInvitationAccept.vue';
import AcceptInvitationRegister from '@/components/AcceptInvitation/AcceptInvitationRegister.vue';

defineProps({
  invitation: {
    type: Object,
    required: true,
  }
})
</script>
