import { IsPrimitive } from "../IsPrimitive/IsPrimitive";

export function CreateRecursiveCopy<T>(obj:T):T{
    if (IsPrimitive(obj)) return obj;
    if (Array.isArray(obj)) return obj.map((elem)=>CreateRecursiveCopy(elem)) as T;

    const copy: {[key:string]: any} = {};
    for(const key in obj){copy[key] = CreateRecursiveCopy(obj[key]);}

    return copy as T;
}