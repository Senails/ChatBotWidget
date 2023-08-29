import { CreateVueStore } from "@/shared/MyStateMeneger/Vue/VueStore";


type StoreType = {
    X: number,
    Y: number,
    moved: boolean,
}

const initStore:StoreType = {
    X: 0,
    Y: 0,
    moved: false,
};

export const { useSelector , updateStore} = CreateVueStore(initStore);