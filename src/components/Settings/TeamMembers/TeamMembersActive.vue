<template>
  <v-list class="pa-0" density="compact">
    <v-list-item
      v-for="member in members"
      :key="member.id"
      class="pa-0"
    >
      <div class="d-flex ga-2 align-center">
        <div>
          {{ member.first_name }} ({{ member.email }})
        </div>
        <div>
          <TeamMemberUpdateRole
            :member-id="member.id"
            :member-role="member.role"
            @done="(role) => member.role = role"
          />
        </div>
      </div>

      <template #append>
        <TeamMemberKick
          v-if="member.role !== 'admin' || adminCount > 1"
          :member-id="member.id"
          @done="() => emit('kick')"
        />
      </template>
    </v-list-item>
  </v-list>
</template>

<script setup>
import TeamMemberKick from '@/components/Settings/TeamMembers/TeamMemberKick.vue';
import TeamMemberUpdateRole from '@/components/Settings/TeamMembers/TeamMemberUpdateRole.vue';
import {computed} from 'vue';

const emit = defineEmits(['kick'])
const props = defineProps({
  members: {
    type: Array,
    default: () => []
  }
})

const adminCount = computed(() => props.members.filter(o => o.role === 'admin').length)
</script>
