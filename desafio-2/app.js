new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valorCompleto:''
    }, methods:{
        alerta(){
          return alert(' Teste 1 !') 
        },
        guardaValor(e){
            this.valor = e.target.value
            
        }, 
        guardaValorCompleto(e){
            return this.valorCompleto = e.target.value
        }
    }
})