import {defineStore} from "pinia";

export const useToastStore = defineStore('toastStore', {
    state: () => ({  show: false, message: '', type: 'info', duration: 3000 }),
    actions: {

    }
})
