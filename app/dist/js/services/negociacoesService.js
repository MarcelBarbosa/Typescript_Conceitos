import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoesDia() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoesService.js.map