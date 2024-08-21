<template>
  <div>
    <div class="mb-4">
      <p>Você foi convidado para participar o time {{ invitation.team }} do AgendaMe.</p>
      <p>Por favor, faça seu cadastro abaixo.</p>
    </div>

    <RegisterForm
      :email="invitation.email"
      email-disabled
      @done="emit('done')"
    />
  </div>
</template>

<script setup>
import RegisterForm from '@/components/auth/RegisterForm.vue';

const emit = defineEmits(['done'])

defineProps({
  invitation: {
    type: Object,
    required: true,
  }
})
</script>
