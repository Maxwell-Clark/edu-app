import {defineStore} from "pinia";

export const useToastStore = defineStore('toastStore', () => {
    const show = false;
    const message = '';
    const type = 'info';
    const duration = 5000;
    const computedShow = computed(() => show.value)
    const computedMessage = computed(() => message.value);
    const computedType = computed(() => type.value);


    function newToast(show, message, type) {
        this.show = show;
        this.message = message;
        this.type = type
        setTimeout(() => {
            this.resetShow()
        }, this.duration);
    }

    function resetShow() {
        this.show = false
    }

    return { show, message, type, duration, computedShow, computedMessage,  computedType, resetShow, newToast }

})
