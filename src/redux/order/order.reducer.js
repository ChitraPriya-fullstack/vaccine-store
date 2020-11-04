import ORDER_DATA from './orderData';

const INITIAL_STATE = {
    collections: ORDER_DATA
};


const orderReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default orderReducer;