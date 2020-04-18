import { config } from "../lib/conf.service";

export function isConfigured(target: any, propertyKey: any, descriptor: any) {
    const originalFunction = descriptor.value;
    
    descriptor.value = async function() {
        if (await config.isConfigured()) {
            const bindedOriginalFunction = originalFunction.bind(this);
            const result = bindedOriginalFunction();
            return result;
        }
      };
      return descriptor;
}