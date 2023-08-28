// !!! Only for Vue !!!
import { computed, onUnmounted, ref } from "vue";
import { CreateUnivarsalStore, type Selector, type Store } from "../UiversalStore/store";


export function CreateVueStore(initialStore: Store){
    const {Sub, UpdateStore} = CreateUnivarsalStore(initialStore);

    function useSelector(selectorCallback: Selector){
        const retrt = ref(false);
        const forceRender = ()=>{retrt.value = !retrt.value;};
        const { unSub, getStore } = Sub(forceRender,selectorCallback);
        onUnmounted(()=>unSub);
    
        return computed(()=>retrt.value?getStore(selectorCallback):getStore(selectorCallback));
    }

    return {
        useSelector,
        UpdateStore
    }
}

const initStore: Store  = {
    num: 0,
    text : "12"
};
export const {useSelector , UpdateStore } = CreateVueStore(initStore);
