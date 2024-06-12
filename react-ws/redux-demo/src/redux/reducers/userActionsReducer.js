const initialState={
    users:0,
};

const userActionsReducer=(state=initialState,action)=>{
    const {type}=action;
    switch(type){
        case 'INCREMENT':
            return{
                ...state,
                count:state.count+1
            };
        case 'DECREMENT':
            return{
                ...state,
                count:state.count-1
            };
        default:
            return state;
    }
};

export default userActionsReducer;