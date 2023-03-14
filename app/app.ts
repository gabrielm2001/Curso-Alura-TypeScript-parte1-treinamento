// // import { Negociacao } from "./models/negociacao.js";

import { negociacao_controler } from "./controllers/negociacao_controller.js"
import { Negociacoes } from "./models/negociacoes.js"


// // const negociacao = new Negociacao(
// //     new Date(),
// //     10,
// //     10
// // )

// // console.log(negociacao.volume)

// // import { negociacao_controler } from "./controllers/negociacao_controller.js";

// // const controler = new negociacao_controler()

// // const form = document.querySelector('.form')

// // form.addEventListener('submit', event=> {
// //     event.preventDefault()
// //     console.log(controler.adiciona())
// // })

// import { negociacao_controller } from "./controllers/negociacao_controller.js";

// const controler = new negociacao_controller()

// const form = document.querySelector('.form')

// form.addEventListener('submit', event=>{
//     event.preventDefault()
//     console.log(controler.adiciona())
//     controler.limparFormulario()
// })


// const form = document.querySelector('.form')

// form.addEventListener('submit', event=>{
//     event.preventDefault()

//     const negociacao = new negociacao_controller()

//     console.log(negociacao.adiciona())
//     negociacao.limparFormulário()

// })


// import { negociacao_controler } from "./controllers/negociacao_controller.js"

// const form = document.querySelector('.form')

// form.addEventListener('submit', event=>{
//     event.preventDefault()

//     const negociacao = new negociacao_controler()

//     negociacao.adicina()
//     negociacao.limpar_form()
// })




// const form = document.querySelector('.form')

// form.addEventListener('submit', event=>{
//     event.preventDefault()

//     const negociacao = new negociacao_controler()

//     negociacao.adiciona()
//     negociacao.limpar_form()
// })




const form = document.querySelector('.form')

form.addEventListener('submit', event=>{
    event.preventDefault()

    const negociacao = new negociacao_controler()

    negociacao.cria_negociacao()
    negociacao.limpar_form()

    const negociacoes = new Negociacoes()
    console.log(negociacoes.lista())
})


