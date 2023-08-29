// !!! Only for Vue !!!
import { computed, onUnmounted, ref } from "vue";
import { CreateUnivarsalStore, type Selector, type Store } from "../UniversalStore/store";


export function CreateVueStore<T extends Store>(initialStore: T){
    const {Sub, UpdateStore} = CreateUnivarsalStore<T>(initialStore);

    function useSelector(selectorCallback: Selector<T>){
        const retrt = ref(false);
        const forceRender = ()=>{retrt.value = !retrt.value;};
        const { unSub, getStore } = Sub(forceRender,selectorCallback);
        onUnmounted(()=>unSub);
    
        return computed<T>(()=>retrt.value?getStore(selectorCallback):getStore(selectorCallback));
    }

    return {
        useSelector,
        updateStore:UpdateStore
    }
}