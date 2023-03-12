// import { Negociacao } from "../models/negociacao_model.js";

import { Negociacao } from "../models/negociacao_model.js"
import { Negociacoes } from "../models/negociacoes.js"


// export class negociacao_controller{

//     private inputData: HTMLInputElement
//     private inputQuantidade: HTMLInputElement
//     private inputValor: HTMLInputElement

//     constructor(){

//     this.inputData = document.querySelector('#data')
//     this.inputQuantidade = document.querySelector('#quantidade')
//     this.inputValor = document.querySelector('#valor')

//     } 

//     adiciona(): void{
        
//         const negociacao = this.criaNegociacao()
//         console.log(negociacao)

//     }

//     criaNegociacao(): Negociacao{
//         const exp = /-/g
//         const date = new Date(this.inputData.value.replace(exp, ','))

//         const quantidade = parseInt(this.inputQuantidade.value)

//         const valor = parseInt(this.inputValor.value)

//         return new Negociacao(date, quantidade, valor,)
        
//     }

//     limparFormulario(): void{
//         this.inputData.value = ''
//         this.inputValor.value = ''
//         this.inputQuantidade.value = ''
//         this.inputData.focus()
//     }

// }

// import { Negociacao } from "../models/negociacao_model.js";

// export class negociacao_controller{

//     private inputData: HTMLInputElement
//     private inputQuantidade: HTMLInputElement
//     private inputValor: HTMLInputElement

//     constructor(){
//         this.inputData = document.querySelector('#data')
//         this.inputQuantidade = document.querySelector('#quantidade')
//         this.inputValor = document.querySelector('#valor')
//     }

//     adiciona(): void{
//         const negociacao = this.crianegociacao()
//         console.log(negociacao)
//     }

//     crianegociacao(): Negociacao{
//         const exp = /-/g
//         const date = new Date(this.inputData.value.replace(exp, ','))

//         const quantidade = parseInt(this.inputQuantidade.value)
//         const value = parseInt(this.inputValor.value)
//         return new Negociacao(date, quantidade, value)
//     }

//     limparFormulário(): void{
//         this.inputData.value = ''
//         this.inputQuantidade.value = ''
//         this.inputValor.value = ''

//         this.inputData.focus()
//     }

// }



// import { Negociacao } from "../models/negociacao_model.js"
// import { Negociacoes } from "../models/negociacoes.js"

// export class negociacao_controler{

//     private HTML_data: HTMLInputElement
//     private HTML_quantidade: HTMLInputElement
//     private HTML_valor: HTMLInputElement

//     private Negociacoes = new Negociacoes()

//     constructor(){
//         this.HTML_data = document.querySelector('#data')
//         this.HTML_quantidade = document.querySelector('#quantidade')
//         this.HTML_valor = document.querySelector('#valor')
//     }

//     adicina(): void{
//         const negociacao = this.criar_negociacao()
//         this.Negociacoes.adiciona(negociacao)
//         console.log(this.Negociacoes.lista())
//         this.limpar_form()
//     }

//     criar_negociacao(): Negociacao{
//         const exp = /-/g

//         const data = new Date(this.HTML_data.value.replace(exp, ','))
//         const quantidade = parseInt(this.HTML_quantidade.value)
//         const valor = parseInt(this.HTML_valor.value)

//         return new Negociacao(data, quantidade, valor)
//     }

//     limpar_form(): void{
//         this.HTML_data.value = ''
//         this.HTML_quantidade.value = ''
//         this.HTML_valor.value = ''

//         this.HTML_data.focus()
//     }

// }






export class negociacao_controler{

    private HTML_data: HTMLInputElement
    private HTML_quantidade: HTMLInputElement
    private HTML_valor: HTMLInputElement

    private negociacoes = new Negociacoes()

    constructor(){

        this.HTML_data = document.querySelector('#data')
        this.HTML_quantidade = document.querySelector('#quantidade')
        this.HTML_valor = document.querySelector('#valor')

        this.criar_negociacao()
    }

    adiciona(){
        
        const negociacao = this.criar_negociacao()

        this.negociacoes.adiciona(negociacao)
        console.log(this.negociacoes.lista())

    }

    criar_negociacao(): Negociacao{
        const exp = /-/g

        const data = new Date(this.HTML_data.value.replace(exp, ','))
        const quantidade = parseInt(this.HTML_quantidade.value)
        const value = parseInt(this.HTML_valor.value)

        return new Negociacao(data, quantidade, value)
    }

    limpar_form(){
        this.HTML_data.value = ''
        this.HTML_quantidade.value = ''
        this.HTML_valor.value = ''

        this.HTML_data.focus()
    }

}


