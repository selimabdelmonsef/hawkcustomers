import { REDUCERS_CONSTANTS } from "../../constants/reducers.constants";

export const selectCustomer = (payload) => ({
    type: REDUCERS_CONSTANTS.CUSTOMER.SELECT_CUSTOMER,
    data: payload
});

export const getCustomers = (payload) => ({
    type: REDUCERS_CONSTANTS.CUSTOMER.GET_CUSTOMER_DATA,
    data: payload
});

export const addCustomer = (payload) => ({
    type: REDUCERS_CONSTANTS.CUSTOMER.ADD_CUSTOMER,
    data: payload
});

export const deleteCustomer = () => ({
    type: REDUCERS_CONSTANTS.CUSTOMER.DELETE_CUSTOMER,
});

export const editCustomer = (payload) => ({
    type: REDUCERS_CONSTANTS.CUSTOMER.EDIT_CUSTOMER,
    data: payload
});