function logarTempoDeExecucao(){
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor) {

            const metodoOriginal = descriptor.value;
            descriptor.value = function(...args: Array<any>) {
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`A execução de "${propertyKey}" levou : ${(t2 - t1) / 10000} segundos.`);
                retorno;
            };
        return descriptor;
    }
}

export {logarTempoDeExecucao};