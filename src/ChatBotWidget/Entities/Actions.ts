import { GetBotAnswer } from "../Utils/GetBotAnswer";
import { UpdateStore } from "./Store";


export async function SendMessageToBot(text:string){
    SetLoading(true);
    SetMyMessage(text);
    const res = await GetBotAnswer(text)!;
    UpdateStore((store)=>{
        store.fastMessageList = res?.fastMessagesForUser;
        store.prevMessageList.push(res?.botMessage);
        return store;
    })
    SetLoading(false);
}


let semafor = 0;
function SetLoading(isActive: boolean){
    if (isActive){
        semafor++;
        if (semafor===1) {
            UpdateStore((s)=>{
                s.botIsLoading = true;
                return s;
            })
        }
        return;
    }
    semafor--;
    if (semafor===0) {
        UpdateStore((s)=>{
            s.botIsLoading = false;
            return s;
        })
    }
}

function SetMyMessage(text:string){
    UpdateStore((store)=>{
        store.prevMessageList.push({
            text,
            authorname:"",
            date:"",
            id:Date.now(),
        });
        return store;
    })
}