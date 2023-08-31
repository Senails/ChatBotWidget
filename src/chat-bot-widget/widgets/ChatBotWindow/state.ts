import { CreateVueStore } from "@/shared/StateMeneger";


const initStore = {
    X: 0,
    Y: 0,
    moved: false,
};


// стейт управления перемещение окна
export const { useSelector , updateStore , getStore} = CreateVueStore(initStore);


export function MoveStart(event: MouseEvent, conteiner: HTMLDivElement|null){
    const startX = event.clientX;
    const startY = event.clientY;
    const {top, left} = conteiner!.getBoundingClientRect();

    window.addEventListener('mousemove',MouseMove);
    window.addEventListener('mouseup',MouseUp);

    
    if (!getStore((s)=>s.moved)) window.addEventListener('resize',Resize);

    function MouseMove(event: MouseEvent){
        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;

        const newTop = Math.min(
            Math.max(top + deltaY, 0),
            window.innerHeight - conteiner!.clientHeight);
        const newLeft = Math.min(
            Math.max(left + deltaX, 0),
            window.innerWidth - conteiner!.clientWidth);

        Math.min(Math.max(top + deltaY, 0),window.screen.height - 500)
        Math.min(Math.max(left + deltaX, 0),window.screen.width - 400)

        updateStore((s)=>{
            s.X = newLeft;
            s.Y = newTop;
            s.moved = true;
            return s;
        })
    }
    function MouseUp(){
        window.removeEventListener('mousemove',MouseMove);
        window.removeEventListener('mousemove',MouseUp);
    }
    function Resize(){
        const conteiner = document.getElementById('ChatModal');
        if (!conteiner) return;
        const {top, left} = conteiner.getBoundingClientRect();

        const newTop = Math.min(Math.max(top, 0),window.innerHeight - conteiner.clientHeight);
        const newLeft = Math.min(Math.max(left, 0),window.innerWidth - conteiner.clientWidth);
        
        console.log(top, left , newTop , newLeft)

        updateStore((s)=>{
            s.X = newLeft;
            s.Y = newTop;
            return s;
        })
    }
}