import {SEARCH_PUBLICATIONS} from "../../constans"


const initialState={
    publications:[]
}


export default (state= initialState, action)=>{
    switch(action.type){
        case SEARCH_PUBLICATIONS:
        return{
            ...state, publications: action.publications    
        }
    default:
            return state;
    }

}