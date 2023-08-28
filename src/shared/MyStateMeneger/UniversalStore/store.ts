import { CreateRecursiveCopy } from "../utils/CreateRecursiveCopy/CreateRecursiveCopy";
import { RecursiveIsEqual } from "../utils/RecursiveIsEqual/RecursiveIsEqual";

export type  Store = {
    [key: string]: any
}
export type Subscribe<T> = {
    id: number,
    render: ()=>void,
    selector: (store: T)=> any,
    isCanceled: boolean,
}
export type Selector<T> = (store: T)=> any;


export function CreateUnivarsalStore<T extends Store>(initialStore: T){
    let store: T = initialStore;
    let list: Array<Subscribe<T>> = [];

    function Sub(forceRenderCallback: ()=>void, selectorCallback: Selector<T> ){
        const ID = Date.now();
        list.push({
            id: ID,
            render: forceRenderCallback,
            selector: selectorCallback,
            isCanceled: false,
        })
    
        return {
            unSub(){
                const obj = list.find(({id})=>id === ID);
                if (!obj) return;
                obj.isCanceled = true;
            },
            getStore(selectorCallback: Selector<T>){
                return selectorCallback(store);
            }
        }
    };
    
    function UpdateStore(mutateCallback: (copy:T)=> T){
        const prevState = store;
        const newState = mutateCallback(CreateRecursiveCopy(store))!;
        store = newState;

        list.forEach((e)=>{
            if (e.isCanceled) return;
            if (!RecursiveIsEqual(e.selector(prevState),e.selector(newState))){
                e.render();
            }
        });
        list = list.filter((e)=>!e.isCanceled);
    };

    return {
        Sub,
        UpdateStore,
    }
}