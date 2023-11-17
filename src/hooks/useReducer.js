import { useReducer } from "react";


function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state -1;
        default:
            throw new Error('Invalid action')
    }
}
export default function useReducerComponent() {
    const [state, dispatch] = useReducer(reducer, 0)
    return <>
        Count {state}
        <button onClick={()=> dispatch({type: 'decrement'})}>-</button>  
        <button onClick={()=> dispatch({type: 'increment'})}>+</button> 

    </>
}