export function logarTempoExecucao(emSegundos: boolean = false) {
    return function(
        target: any,                    //alvo do Decorator (Construtora ou Prototype)
        propertyKey: string,            //nome do método executando o Decorator
        descriptor: PropertyDescriptor  //acesso ao médoto executando o Decorator
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            let divisor = 1;
            let unidade = 'milisegundos';

            if(emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }

            const t1 = performance.now();

            //chamar o método original
            const retorno = metodoOriginal.apply(this, args);

            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) /divisor} ${unidade}`)
            return retorno; 
        }
        
        return descriptor;
    }   
};
