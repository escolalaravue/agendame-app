import {defineStore} from 'pinia';
import axios from "axios";
import {useStorage} from '@vueuse/core';

export const useMeStore = defineStore('me', {
  state: () => ({
    user: null,
    currentTeamToken: useStorage('team_id', ''),
  }),

  actions: {
    getMe() {
      return axios.get('api/me')
        .then((response) => {
          this.user = response.data.data

          this.setDefaultTeam();
        })
    },

    setDefaultTeam() {
      if (!this.user.teams.some(o => o.token === this.currentTeamToken)) {
        this.changeTeam(this.defaultTeam.token)
      }
    },

    changeTeam(teamToken) {
      if (this.user.teams.some(o => o.token === teamToken)) {
        this.currentTeamToken = teamToken
      }
    }
  },

  getters: {
    isLoggedIn: (state) => !!state?.user?.id,
    defaultTeam: (state) => state?.user?.teams.find(o => o.default),
    currentTeam: (state) => {
      const team = state?.user?.teams.find(o => o.token === state.currentTeamToken)

      return {
        ...team,
        show_ads: team.is_admin && !team.has_subscription,
      }
    }
  }
})
