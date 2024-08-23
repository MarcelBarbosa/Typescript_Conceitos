import { Imprimivel } from "./imprimivel.js";

// Polimorfismo da Classe: capacidade de um objeto de ser referenciado de múltiplas formas
// Negociacao e Negociacoes herdam de Imprimivel
export function imprimir(...objetos: Imprimivel[]) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}