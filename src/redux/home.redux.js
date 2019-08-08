import { TypeofTypeAnnotation } from "@babel/types";

/** Action Declerar */
const ADD = 'ADD'
const REMOVE = 'REMOVE'

const initState = {
    num:20
}
export function num(state=initState,action){
    switch (action.type) {
        case ADD:
            return {
                ...state,
                num:state.num+1
            }
        case REMOVE:
            return {
                ...state,
                num:state.num-1
            }  
        default:
            return state;      
    }
}
// action function
export function add() {
    return { type: ADD};
  }
  export function remove() {
    return { type: REMOVE}
  }

