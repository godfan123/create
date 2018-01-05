const ADD="增加";
const REMOVE="减少";

export function counter(state=10,action){
      switch(action.type){
          case ADD:
              return state+1;
          case REMOVE:
              return state-1;

          default:
              return state
      }
}


export function add(){
     return {type:ADD}
    }


export function remove(){
    return {type:REMOVE}
}
export function removeTime(){

    return dispatch=>{

        setTimeout(()=>{
            dispatch({type:ADD})

        },2000)

    }


}


