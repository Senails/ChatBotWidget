import { CreateRecursiveCopy } from "../utils/CreateRecursiveCopy/CreateRecursiveCopy";
import { RecursiveIsEqual } from "../utils/RecursiveIsEqual/RecursiveIsEqual";

export type  Store = {
    [key: string]: any
}
export type Subscribe = {
    id: number,
    render: ()=>void,
    selector: (store: Store)=> any
}
export type Selector = (store: Store)=> any;


export function CreateUnivarsalStore(initialStore: Store){
    let store: Store = initialStore;
    let list: Array<Subscribe> = [];

    function Sub(forceRenderCallback: ()=>void, selectorCallback: Selector ){
        const ID = Date.now();
        list.push({
            id: ID,
            render: forceRenderCallback,
            selector: selectorCallback,
        })
    
        return {
            unSub(){
                list = list.filter(({id})=>id !== ID);
            },
            getStore(selectorCallback: Selector){
                return selectorCallback(store);
            }
        }
    };
    
    function UpdateStore(mutateCallback: (copy:Store)=> Store){
        const prevState = store;
        const newState = mutateCallback(CreateRecursiveCopy(store));;
        store = newState;
        
        list.forEach((e)=>{
            if (!RecursiveIsEqual(e.selector(prevState),e.selector(newState))){
                e.render();
            }
        });
    };

    return {
        Sub,
        UpdateStore,
    }
}