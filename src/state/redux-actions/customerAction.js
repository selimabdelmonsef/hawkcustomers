import { REDUCERS_CONSTANTS } from "../../constants/reducers.constants";
import { convertArrayToObject } from "../../helper/util";

export const selectCustomer = (payload) => ({
    type: REDUCERS_CONSTANTS.CUSTOMER.SELECT_CUSTOMER,
    data: payload
});

// export const getCustomers = (payload) => ({
//     type: REDUCERS_CONSTANTS.CUSTOMER.GET_CUSTOMER_DATA,
//     data: payload
// });

export const getCustomers = (payload) => {
    const convertToKeydObj = convertArrayToObject(payload, 'id');
    return {
            type: REDUCERS_CONSTANTS.CUSTOMER.GET_CUSTOMER_DATA,
            data: convertToKeydObj
        };
}

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