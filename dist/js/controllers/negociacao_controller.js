// import { Negociacao } from "../models/negociacao_model.js";
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
import { Negociacao } from "../models/negociacao_model.js";
export class negociacao_controller {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.crianegociacao();
        console.log(negociacao);
    }
    crianegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const value = parseInt(this.inputValor.value);
        return new Negociacao(date, quantidade, value);
    }
    limparFormulário() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
