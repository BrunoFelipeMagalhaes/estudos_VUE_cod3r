new Vue({

    el: '#desafio',
    data: {
        nome: "Bruno",
        idade: 25,
        number: '',
        src :'https://media.giphy.com/media/wPyMMQ1NWpmfe/giphy.gif',

    },
    methods: {
        randomNumber(){
           return this.number = Math.random()
        }
    }


})