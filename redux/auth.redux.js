/* 两个操作 action */
const LOGIN='LOGIN';
const LOGOUT='LOGOUT';

/* 定义auth reducer 处理逻辑 */
export function auth(state={isAuth:false,user:'zs'},action){
        switch(action.type){
            case LOGIN:
                return  {isAuth:true,user:'zs'};
            case LOGOUT:
                return {isAuth:false,user:'zs'};
            default:
            return state
        }
}

/* action create */
export function login(){
   return {type:LOGIN}
}

export function logout(){
    return {type:LOGOUT}
}
