const AGG='增加';
const REMOVE='减少';
export  function counter(state=10,action){

    switch(action.type){
        case AGG:
            return state+1;
        case REMOVE:
            return state-1;
        default:
            return state
    }

}

export function addGun() {
     return {type:AGG}
}
export function removeGun(){
    return {type:REMOVE}
}
export function addGunAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGun())
        },2000)
    }
}

