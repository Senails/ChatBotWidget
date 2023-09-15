import { createEasyStore } from "easy-state-maneger-vue";


const initStore = {
    X: 0,
    Y: 0,
    moved: false,
    moving: false,
};


// стейт управления перемещение окна
export const { useSelector: moveSelector , updateStore , getStore} = createEasyStore(initStore);


export function MoveStart(event: MouseEvent, conteiner: HTMLDivElement|null){
    const startX = event.clientX;
    const startY = event.clientY;
    const {top, left} = conteiner!.getBoundingClientRect();

    window.addEventListener('mousemove',MouseMove);
    window.addEventListener('mouseup',MouseUp);

    
    if (!getStore().moved) window.addEventListener('resize',Resize);

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
            s.moving = true;
            return s;
        })
    }
    function MouseUp(){
        window.removeEventListener('mousemove',MouseMove);
        window.removeEventListener('mousemove',MouseUp);
        updateStore((s)=>{
            s.moving = false;
            return s;
        })
    }
    function Resize(){
        const conteiner = document.getElementById('ChatModal');
        if (!conteiner) return;
        const {top, left} = conteiner.getBoundingClientRect();

        const newTop = Math.min(Math.max(top, 0),window.innerHeight - conteiner.clientHeight);
        const newLeft = Math.min(Math.max(left, 0),window.innerWidth - conteiner.clientWidth);

        updateStore((s)=>{
            s.X = newLeft;
            s.Y = newTop;
            return s;
        })
    }
}