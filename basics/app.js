const app = Vue.createApp({
    //template: ' = <h1>Hello Vue!</h1>'
    data() {
        return {
            teller: 0,
            show: true,
            url: 'https://www.google.com'
        }
    },

    methods: {
    tellerPlus() {
        this.teller++ 
    },
    tellerMin() {
        this.teller-- 
    },
    toggleShow() {
        this.show = !this.show
    }
}
}) 

app.mount('#app')