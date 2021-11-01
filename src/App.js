import './App.scss';
import InfoListComponent from './components/infoListComponent/infoListComponent';
import { api } from './constants/api.constants';
import useFetch from './hook/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomer, deleteCustomer, editCustomer, getCustomers, selectCustomer } from './state/redux-actions/customerAction';
import { useEffect, useState } from 'react';
import FormComponent from './components/formComponent/formComponent';

function App() {
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customer.customers);
  const selectedCustomer = useSelector(state => state.customer.selected);
  const [selectedCustomerState, setSelectedCustomer] = useState(false)
  const { data: getCustomersData, isPending, error } = useFetch(api.customers_api);
  const [onAddNewCustomer, setOnAddNewCustomer] = useState(false);
  const [onAddEditCustomer, setOnEditNewCustomer] = useState(false);

  const [onAddEditClick, setOnAddEditClick] = useState(false);
  useEffect(() => {
    setCustomersData();
  }, [getCustomersData]);

  const setCustomersData = () => {
    dispatch(getCustomers(getCustomersData));
  };

  const deletedCustomer = () => {
    if (selectedCustomer === null || selectedCustomerState === selectedCustomer) {
      alert("Select a customer first please");
    }
    else {
      dispatch(deleteCustomer());
      setSelectedCustomer(selectedCustomer);
    }
  }
  const editedCustomer = () => {
    if (selectedCustomer === null || selectedCustomerState === selectedCustomer) {
      alert("Select a customer first please");
    }
    else{
      setSelectedCustomer(selectedCustomer);
      setOnAddEditClick(true);
      setOnEditNewCustomer(true);
    }
  }
  const addNewCustomer = () => {
    // if (selectedCustomer === null || selectedCustomerState === selectedCustomer) {
    //   alert("Select a customer first please");
    // }
    // else {
      setOnAddEditClick(true);
      setOnAddNewCustomer(true);
    // }

  }
  const onAddEditClicked = (submitted) => {
    setOnAddEditClick(submitted);
    setOnAddNewCustomer(submitted);
    setOnEditNewCustomer(submitted);
  }
  const addEditCustomer = (customerInfos) => {
    if (onAddNewCustomer === true) {
      dispatch(addCustomer(customerInfos))
    }
    else if (onAddEditCustomer === true) {
      dispatch(editCustomer(customerInfos))

    }
  }
  return (
    <div className="app">

      <div>
        <button onClick={() => addNewCustomer()}> add new </button>
        <button onClick={() => deletedCustomer()}>DELETE</button>
        <button onClick={() => editedCustomer()}>EDIT </button>
      </div>
      <p>My Customers</p>
      <div>
        {onAddEditClick === false ?
          ""
          :
          <div className="formComponentStyle">
            <FormComponent
              onSubmit={(submition) => onAddEditClicked(submition)}
              infos={(getInfos) => addEditCustomer(getInfos)} />
          </div>}
        {isPending ? "Loading..."
          :
          <InfoListComponent
            tabelTitles={["#", "First Name", "Last Name", "Username", "Gender", "Email", "Phone Number", "Adress", "CC Number"]}
            customerInfos={customers}
            selectedCustomer={(selectedCustomer) => dispatch(selectCustomer(selectedCustomer))}
          />}
        {error ? "something went wrong please refresh" : ""}
      </div>

    </div>
  );
}

export default App;
