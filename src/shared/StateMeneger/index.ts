// Create Store for React     
// import { CreatStore, Selector, Store } from "./store";
// import { useEffect, useState } from "react";

// export function CreateReactStore<T extends Store>(initialStore: T){
//     const {sub, updateStore, getStore} = CreatStore<T>(initialStore);

//     return {
//         useSelector(selectorCallback: Selector<T>){
//             const [state,setState] = useState<boolean>(false);
//             const forceRender = ()=>{setState(!state)};
//             const { unSub, getStore } = sub(forceRender,selectorCallback);

//             useEffect(()=>{
//                 return ()=>{
//                     unSub();
//                 }
//             })
        
//             return getStore(selectorCallback);
//         },
//         updateStore,
//         getStore,
//     }
// }
// Create Store for React  


// Create Store For Vue
import { computed, onUnmounted, ref } from "vue";
import { CreatStore, type Selector, type Store } from "./store";

export function CreateVueStore<T extends Store>(initialStore: T){
    const {sub, updateStore, getStore} = CreatStore<T>(initialStore);

    return {
        useSelector(selectorCallback: Selector<T>){
            const retrt = ref(false);
            const forceRender = ()=>{retrt.value = !retrt.value;};
            const { unSub, getStore } = sub(forceRender,selectorCallback);
            onUnmounted(()=>{unSub()});
        
            return computed<T>(()=>retrt.value?getStore(selectorCallback):getStore(selectorCallback));
        },
        updateStore,
        getStore,
    }
}
// Create Store For Vue