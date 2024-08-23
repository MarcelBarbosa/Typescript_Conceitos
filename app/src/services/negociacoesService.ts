import { NegociacoesDia } from "../interfaces/negociacaoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    public obterNegociacoesDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacoesDia[]) => {
                return dados.map(dado => {
                    return new Negociacao(new Date(), dado.vezes, dado.montante)
                })
            })
    }
}