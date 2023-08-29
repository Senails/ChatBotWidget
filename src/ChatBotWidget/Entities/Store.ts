import { CreateVueStore } from "@/shared/MyStateMeneger/Vue/VueStore";
import type { TMessageType } from "../types";


type StoreType = {
    fastMessageList: string[],
    prevMessageList: TMessageType[],
    botIsLoading:boolean,
}

const initStore:StoreType = {
    fastMessageList: ["Заказать пиццу", "Установить будильник", "Вывести погоду"],
    prevMessageList: [{
        id: Date.now(),
        text: "Привет! Что я могу для Вас сделать?",
        authorname: "Чат бот",
        date:""
    }],
    botIsLoading: false,
};

export const { useSelector , UpdateStore} = CreateVueStore(initStore);