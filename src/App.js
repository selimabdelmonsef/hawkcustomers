import './App.scss';
import InfoListComponent from './components/infoListComponent/infoListComponent';
import { api } from './constants/api.constants';
import useFetch from './fetch/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomer, deleteCustomer, getCustomers, selectCustomer } from './state/redux-actions/customerAction';
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customer.customers);
  const selectedCustomer = useSelector(state => state.customer.selected);
  const [selectedCustomerState, setSelectedCustomer] = useState(false)
  const { data: getCustomersData, isPending, error } = useFetch(api.customers_api);

  useEffect(() => {
    setCustomersData();
  }, [getCustomersData]);

  const setCustomersData = () => {
    dispatch(getCustomers(getCustomersData))
  }
  const deletedCustomer = () => {
    if (selectedCustomer === null || selectedCustomerState === selectedCustomer) {
      alert("Select a customer first please");
    }
    else {
      dispatch(deleteCustomer());
      setSelectedCustomer(selectedCustomer);
    }
  }
  const addNewCustomer = () => {
    const firstName = prompt("Enter First Name");
    const lastName = prompt("Enter Last Name");
    const username = prompt("Enter username");
    const gender = prompt("Enter gender");
    const email = prompt("Enter email");
    const phone_number = prompt("Enter phone number");
    const address = prompt("Enter address");
    const CCNumber = prompt("Enter credit card Number");
    dispatch(addCustomer({
      "first_name": firstName,
      "last_name": lastName,
      "username": username,
      "gender": gender,
      "email": email,
      "phone_number": phone_number,
      address: { "city": address },
      credit_card: { "cc_number": CCNumber },
    }));
  }
  return (
    <div className="app">
      <div>
        <button onClick={() => addNewCustomer()}> add new </button>
        <button onClick={() => deletedCustomer()}>DELETE</button>
        <button>EDIT</button>
      </div>
      <p>My Customers</p>
      <div>
        {isPending ? "Lodaing..."
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
