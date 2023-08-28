import { CreateVueStore } from "@/shared/MyStateMeneger/Vue/VueStore";

const initStore= {
    value: "string"
};
export const { useSelector , UpdateStore} = CreateVueStore(initStore);