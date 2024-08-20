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

              <v-alert
                color="error"
                class="mb-2"
              >
                Feedback
              </v-alert>

              <div
                class="text-center">
                <v-progress-circular
                  indeterminate
                  color="primary"
                />
              </div>

              <div>
                <div class="mb-4">
                  <p>Você foi convidado para participar o time "X" do AgendaMe.</p>
                  <p>Por favor, faça seu cadastro abaixo.</p>
                </div>

                <RegisterForm />
              </div>

              <div>
                <div class="mb-4">
                  <h2>Entrar para o time "X" do AgendaMe.</h2>
                </div>

                <v-btn
                  text="Aceitar Convite"
                  flat
                  block
                  color="primary"
                  size="large"
                />
              </div>

            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import Logo from '@/layouts/full/logo/Logo.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';
</script>
