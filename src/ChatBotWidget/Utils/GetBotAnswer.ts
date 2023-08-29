import { Sleep } from "@/shared/Utils/Sleep";
import type { TMessageType } from "../types"

export type TBotAnswer = {
    botMessage: TMessageType,
    fastMessagesForUser: string[]
}

export async function GetBotAnswer(userMessae: string):Promise<TBotAnswer>{
    await Sleep(2500);
    return {
        botMessage : {
            id: Date.now(),
            text: "Привет! Что я могу для Вас сделать?",
            authorname: "ChatBot",
            date:""
        },
        fastMessagesForUser: ["Заказать пиццу", "Установить будильник", "Вывести погоду"]
    }
}