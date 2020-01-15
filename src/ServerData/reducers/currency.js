import * as actions from '../actions/currency-action';

export const currency = (state = 'USD', action) => {
    switch(action.type) {
        case actions.SET_CURRENCY: 
            return { ...state };
        default:
            return state;
    }
};

export default currency