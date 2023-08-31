import { GetBotAnswer } from "../Utils/GetBotAnswer";
import { updateStore } from "./Store";


export async function SendMessageToBot(text:string){
    SetLoading(true);
    SetMyMessage(text);
    const res = await GetBotAnswer(text)!;
    updateStore((store)=>{
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
            updateStore((s)=>{
                s.botIsLoading = true;
                return s;
            })
        }
        return;
    }
    semafor--;
    if (semafor===0) {
        updateStore((s)=>{
            s.botIsLoading = false;
            return s;
        })
    }
}

function SetMyMessage(text:string){
    updateStore((store)=>{
        store.prevMessageList.push({
            text,
            authorname:"",
            date:"",
            id:Date.now(),
        });
        return store;
    })
}