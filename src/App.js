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
  const [onAddEditClick, setOnAddEditClick] = useState(false);
  const [addNewCustomerClicked, setAddNewCustomerClicked] = useState(false);
  const [editCustomerClicked, setEditCustomerClicked] = useState(false);


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
    if (!selectedCustomer) {
      alert("Please select a customer first");
    }
    else {
      setOnAddEditClick(true);
      setEditCustomerClicked(true);
    }

  }
  const onAddNewCustomerClick = () => {
    dispatch(selectCustomer(null));
      setOnAddEditClick(true);
      setAddNewCustomerClicked(true);

  }
  const addEditNewCustomer = (getInfos) => {
    if (addNewCustomerClicked === true) {
      dispatch(addCustomer(getInfos));
      setAddNewCustomerClicked(false);
    }
    else if (editCustomerClicked === true) {
      dispatch(editCustomer(getInfos));
      setEditCustomerClicked(false);
      dispatch(selectCustomer(null));
    }
  }
  return (
    <div className="app">
      <div>
        <button onClick={() => onAddNewCustomerClick()}> add new </button>
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
              onSubmit={(submition) => setOnAddEditClick(submition)}
              infos={(getInfos) => addEditNewCustomer(getInfos)} />
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
