<template>
  <v-dialog width="auto">
    <template #activator="{ props: activatorProps }">
      <v-btn
        flat
        color="primary"
        size="small"
        v-bind="activatorProps">Convidar
      </v-btn>
    </template>

    <template #default="{ isActive }">
      <v-card width="400">
        <v-card-title>Convidar</v-card-title>

        <v-card-text>
          <v-alert
            v-if="feedbackMessage"
            color="error"
            class="mb-2"
          >{{ feedbackMessage }}</v-alert>

          <v-form
            @submit.stop.prevent="submit"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors.email"
              label="Email"
              variant="outlined"
              color="primary"
            />

            <v-select
              v-model="role"
              :error-messages="errors.role"
              label="Cargo"
              variant="outlined"
              color="primary"
              :items="[
                          {
                            label: 'Admin',
                            value: 'admin'
                          },
                          {
                            label: 'Atendente',
                            value: 'atendente'
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
                text="Convidar"
                :loading="isSubmitting"
              />
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import {object, string} from 'yup';
import {useField, useForm} from 'vee-validate';
import {ref} from 'vue';
import {useTeamsStore} from '@/store/teams';

const teamStore = useTeamsStore()
const schema = object({
  email: string().required().email().label('E-mail'),
  role: string().required().label('Cargo')
})

const {handleSubmit, errors, isSubmitting} = useForm({
  validationSchema: schema,
  initialValues: {
    email: '',
    role: 'admin'
  }
})

const submit = handleSubmit(async (payload) => {
  await teamStore.storeTeamInvitation(payload)
})

const {value: email} = useField('email')
const {value: role} = useField('role')
const feedbackMessage = ref('');
</script>
