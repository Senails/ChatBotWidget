import type { TMessageType } from "../types"

export type TBotAnswer = {
    botMessage: TMessageType,
    fastMessagesForUser: string[]
}

export async function GetBotAnswer(userMessae: string):Promise<TBotAnswer|null>{
    return null;
}