import { REDUCERS_CONSTANTS } from "../../constants/reducers.constants";

export const selectCustomer = (payload)=>({
    type: REDUCERS_CONSTANTS.CUSTOMER.SELECT_CUSTOMER,
    data: payload
});

export const getCustomers = (payload)=>({
    type: REDUCERS_CONSTANTS.CUSTOMER.GET_CUSTOMER_DATA,
    data: payload
});

export const addCustomer = (payload)=>({
    type: REDUCERS_CONSTANTS.CUSTOMER.ADD_CUSTOMER,
    data: payload
});