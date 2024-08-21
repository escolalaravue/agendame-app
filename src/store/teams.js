import {defineStore} from 'pinia';
import axios from 'axios';

export const useTeamsStore = defineStore('teams', {
  state: () => ({
    teams: [],
    toEdit: {},
    toDelete: {},
  }),

  actions: {
    async getTeams() {
      this.teams = await axios.get('api/teams')
        .then(r => r.data.data)
    },

    async storeTeam(payload) {
      const team = await axios.post('api/teams', payload)
        .then(r => r.data.data)
      this.teams.push(team)
    },

    async updateTeam(teamToken, payload) {
      const team = await axios.put(`api/teams/${teamToken}`, payload)
        .then(r => r.data.data)

      const idx = this.teams.findIndex(o => o.token === teamToken)
      this.teams.splice(idx, 1, team)
    },

    async deleteTeam(teamToken) {
      await axios.delete(`api/teams/${teamToken}`)
        .then(r => r.data.data)

      const idx = this.teams.findIndex(o => o.token === teamToken)
      this.teams.splice(idx, 1)
    },

    getTeamMembers() {
      return axios.get('api/team-members')
        .then(r => r.data.data)
    },

    kickTeamMember(id) {
      return axios.delete(`api/team-members/${id}`)
        .then(r => r.data.data)
    },

    updateTeamMemberRole(id, role) {
      return axios.put(`api/team-members/${id}`, {
        role
      })
        .then(r => r.data.data)
    },

    storeTeamInvitation(payload) {
      return axios.post('api/team-invitations', payload)
        .then(r => r.data.data)
    },

    getTeamInvitations() {
      return axios.get('api/team-invitations')
        .then(r => r.data.data)
    },

    removeTeamInvitation(id) {
      return axios.delete(`api/team-invitations/${id}`)
        .then(r => r.data)
    },

    getTeamInvitation(token) {
      return axios.get(`api/team-invitations/${token}`)
        .then(r => r.data.data)
    },

    acceptTeamInvitation(token) {
      return axios.put(`api/team-invitations/${token}`)
        .then(r => r.data.data)
    },
  }
})
