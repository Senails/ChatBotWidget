import type { Store } from "@/shared/MyStateMeneger/UiversalStore/store";
import { CreateVueStore } from "@/shared/MyStateMeneger/Vue/VueState";

const initStore: Store  = {
    value: "string"
};
export const { useSelector , UpdateStore} = CreateVueStore(initStore);