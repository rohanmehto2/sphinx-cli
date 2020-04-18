import { authService } from "../lib/auth.service";

export function isLoggedIn(target: any, propertyKey: any, descriptor: any) {
    const originalFunction = descriptor.value;
    
    descriptor.value = function() {
        if (authService.isLoggedIn()) {
            const bindedOriginalFunction = originalFunction.bind(this);
            const result = bindedOriginalFunction();
            return result;
        }
      };
      return descriptor;
}