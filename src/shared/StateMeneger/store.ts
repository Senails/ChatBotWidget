import { getCopy } from "./utils/getCopy";
import { isEqual } from "./utils/isEqual";


export type  Store = {
    [key: string]: any
}
export type Subscriber<T> = {
    id: number,
    render: ()=>void,
    selector: (state: T)=> any,
    isCanceled: boolean,
}
export type Selector<T> = (store: T)=> any;


export function CreatStore<T extends Store>(initialStore: T){
    let state: T = initialStore;
    let subscribersList: Array<Subscriber<T>> = [];

    return {
        sub(forceRenderCallback: ()=>void, selectorCallback: Selector<T> ){
            const ID = Date.now();
            subscribersList.push({
                id: ID,
                render: forceRenderCallback,
                selector: selectorCallback,
                isCanceled: false,
            })

            return {
                unSub(){
                    const obj = subscribersList.find(({id})=>id === ID);
                    if (!obj) return;
                    obj.isCanceled = true;
                },
                getStore:(selectorCallback: Selector<T>) => selectorCallback(state),
            }
        },

        updateStore(mutateCallback: (copy:T)=> T){
            const prevState = state;
            const newState = mutateCallback(getCopy(state))!;
            state = newState;
    
            subscribersList.forEach((e)=>{
                if (e.isCanceled) return;
                if (!isEqual(e.selector(prevState),e.selector(newState))){
                    e.render();
                }
            });

            subscribersList = subscribersList.filter((e)=>!e.isCanceled);
        },
        getStore:(selectorCallback: Selector<T>) => selectorCallback(state),
    }
}