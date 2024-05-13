import { defineStore } from 'pinia';
import axios from 'axios'
import {useMeStore} from '@/store/me';

export const useAuthStore = defineStore('auth', {
  state: () => ({}),

  actions: {
    sanctum() {
      return axios.get('sanctum/csrf-cookie')
    },
    login(email, password) {
      return axios.post('api/login', {
        email,
        password
      }).then((response) => {
        const meStore = useMeStore();
        meStore.user = response.data.data
        meStore.setDefaultTeam()
      })
    },
    logout() {
      return axios.post('api/logout')
        .then(() => {
          const meStore = useMeStore();
          meStore.$reset()
        })
    },
    register(firstName, email, password) {
      return axios.post('api/register', {
        first_name: firstName,
        email,
        password
      })
    },
    verifyEmail(token) {
      return axios.post('api/verify-email', {token})
    },
    forgotPassword(email) {
      return axios.post('api/forgot-password', {email})
    },
    resetPassword(token, password) {
      return axios.post('api/reset-password', {token, password})
    }
  }
});
