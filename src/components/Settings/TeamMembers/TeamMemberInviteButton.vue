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
          <v-form>
            <v-text-field
              label="Email"
              variant="outlined"
              color="primary"
            />

            <v-select
              label="Cargo"
              variant="outlined"
              color="primary"
              :items="[
                          {
                            label: 'Admin',
                            value: 1
                          },
                          {
                            label: 'Atendente',
                            value: 2
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
              />
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
