// import { Negociacao } from "./negociacao_model.js";
// import { Negociacao } from "./negociacao_model.js";
// export class Negociacaoes{
//     private negociacoes: Array<Negociacao> = []
//     adiciona(negociacao: Negociacao){
//         return this.negociacoes.push(negociacao)
//     }
//     lista(): Array<Negociacao>{
//         return this.negociacoes
//     }
// }
// const negociacaoes = new Negociacaoes()
// import { Negociacao } from "./negociacao_model.js";
// export class Negociacaoes{
//     private static negociacoes: Array<Negociacao> = []
//     adiciona(negociacao: Negociacao){
//         Negociacaoes.negociacoes.push(negociacao)
//     }
//     lista(): ReadonlyArray<Negociacao>{
//         return [...Negociacaoes.negociacoes]
//     }
// }
// const negociacoes = new Negociacaoes()
// negociacoes.lista()
// export class Negociacoes{
//     private static negociacoes: Array<Negociacao> = []
//     adiciona(negociacao: Negociacao){
//         return Negociacoes.negociacoes.push(negociacao)
//     }
//     lista(): ReadonlyArray<Negociacao>{
//         return Negociacoes.negociacoes
//     }
// }
// export class Negociacoes{
//     private static negociacoes: Array<Negociacao> = []
//     adiciona(negociacao: Negociacao){
//         return Negociacoes.negociacoes.push(negociacao)
//     }
//     lista(): ReadonlyArray<Negociacao>{
//         return Negociacoes.negociacoes
//     }
// }
export class Negociacoes {
    adiciona(negociacao) {
        Negociacoes.negociacoes.push(negociacao);
    }
    lista() {
        return Negociacoes.negociacoes;
    }
}
Negociacoes.negociacoes = [];
