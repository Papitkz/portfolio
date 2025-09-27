import { defineStore } from 'pinia';

export const useMainStore = defineStore('store', {
    state: () => ({
        userInformation: {},
    }),
    getters: {
    },
    actions: {
    },
    persist: {
        key: 'store',
        paths: ['userInformation'] 
    }
});