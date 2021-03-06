import { REDUCERS_CONSTANTS } from "../../constants/reducers.constants";

const initstate = {
    selected: null,
    customers: {}
}
const customerReducer = (state = initstate, action) => {
    console.log(state);
    switch (action.type) {
        case REDUCERS_CONSTANTS.CUSTOMER.GET_CUSTOMER_DATA:
            return {
                ...state,
                customers: action.data
            }
        case REDUCERS_CONSTANTS.CUSTOMER.SELECT_CUSTOMER:
            return {
                ...state,
                selected: action.data
            }
        case REDUCERS_CONSTANTS.CUSTOMER.ADD_CUSTOMER:
            return {
                ...state,
                customers: {
                    ...state.customers,
                    [action.data?.id]: { ...action.data }
                }
            }
        case REDUCERS_CONSTANTS.CUSTOMER.DELETE_CUSTOMER:
            delete state.customers[state.selected.id];
            return {
                ...state
            }
        case REDUCERS_CONSTANTS.CUSTOMER.EDIT_CUSTOMER:
            return {
                ...state,
                customers: {
                    ...state.customers,
                    [state.selected.id]: {
                        ...state.selected,
                        ...action.data
                    }
                }

            }
        default:
            return state;
    }
}

export default customerReducer;