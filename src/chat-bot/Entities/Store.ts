import { createEasyStore } from "easy-state-maneger-vue";

const initStore = {
    fastMessageList: ["Заказать пиццу", "Установить будильник", "Вывести погоду"],
    prevMessageList: [{
        id: Date.now(),
        text: "Привет! Что я могу для Вас сделать?",
        authorname: "Чат бот",
        date:""
    }],
    botIsLoading: false,
};

export const { useSelector , updateStore} = createEasyStore(initStore);