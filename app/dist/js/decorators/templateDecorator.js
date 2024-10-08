export function templateDecorator() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const retorno = metodoOriginal.apply(this, args);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=templateDecorator.js.map