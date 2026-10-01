const app = Vue.createApp({
    data() {
        return {
            boeken: [
                {titel: 'De Hobbit', auteur: 'J.R.R. Tolkien', gelezen: true},
                {titel: '1984', auteur: 'George Orwell', gelezen: false},
                {titel: 'De Da Vinci Code', auteur: 'Dan Brown', gelezen: true}
            ],
        }
    },

    methods: {
        toggleRead(boek) {
            boek.gelezen = !boek.gelezen;
        }
    }
}) 

app.mount('#app')