const initialState = {count: 0};

const reducer = (state = initialState , action)=>{
    if(action.type ==='inc'){
        return { count: state.count + 1 };
    }else if(action.type ==='dec'){
        return { count: state.count - 1 };
    }else{
        return state;
    }
}

export default reducer;