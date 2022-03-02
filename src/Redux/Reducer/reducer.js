import { getData } from "../Action/action"
const initialstate = {
    data:[]
}


const reducer = (state = initialstate ,action)=>{
    console.log("action",action.payload)
    switch(action.type){
        case 'GET_DATA':
            return {
                ...state,
                data:action.payload
            }
            break;
            default:
                return state 
    }
}

export default reducer;