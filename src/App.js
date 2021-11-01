import './App.scss';
import InfoListComponent from './components/infoListComponent/infoListComponent';
import { api } from './constants/api.constants';
import useFetch from './hook/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomer, deleteCustomer, editCustomer, getCustomers, selectCustomer } from './state/redux-actions/customerAction';
import { useEffect, useState } from 'react';
import FormComponent from './components/formComponent/formComponent';
import { IMAGES } from './constants/images.constants';

function App() {
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customer.customers);
  const selectedCustomer = useSelector(state => state.customer.selected);
  const [selectedCustomerState, setSelectedCustomer] = useState(false)
  const { data: getCustomersData, isPending, error } = useFetch(api.customers_api);
  const [onAddClick, setOnAddClick] = useState(false);
  const [onEditClick, setOnEditClick] = useState(false);

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
  const onEditedCustomerClick = () => {
    if (!selectedCustomer) {
      alert("Please select a customer first");
    }
    else {
      setOnEditClick(true);
    }
  }

  const onAddNewCustomerClick = () => {
    setOnAddClick(true);
  }

  const addNewCustomer = (getInfos) => {
    dispatch(addCustomer(getInfos));
  }
  const editSelectedCustomer = (getInfos) => {
    dispatch(editCustomer(getInfos))
  }
  return (
    <div className="app">
      {getCustomersData &&
        <>

          <p>My Customers</p>
          <div className="btnStyles">
            <button onClick={() => onAddNewCustomerClick()}>ADD</button>
            <button onClick={() => onEditedCustomerClick()}>EDIT</button>
            <button onClick={() => deletedCustomer()}>DELETE</button>

          </div>
        </>
      }
      <div className="formInfoContainer">
        {onAddClick && <div className="formComponentStyle">
          <FormComponent
            onSubmit={(submition) => setOnAddClick(submition)}
            infos={(getInfos) => addNewCustomer(getInfos)}
            _canEditId={true}
            _id=""
            _first_name=""
            _last_name=""
            _gender=""
            _username=""
            _email=""
            _phonenumber=""
            _address=""
            _creditcard=""
          />
        </div>}

        {onEditClick && <div className="formComponentStyle">
          <FormComponent
            onSubmit={(submition) => setOnEditClick(submition)}
            infos={(getInfos) => editSelectedCustomer(getInfos)}
            _canEditId={false}
            _id={selectedCustomer?.id}
            _first_name={selectedCustomer?.first_name}
            _last_name={selectedCustomer?.last_name}
            _gender={selectedCustomer?.gender}
            _username={selectedCustomer?.username}
            _email={selectedCustomer?.email}
            _phonenumber={selectedCustomer?.phone_number}
            _address={selectedCustomer?.address?.city}
            _creditcard={selectedCustomer?.credit_card?.cc_number}
          />
        </div>}

        {isPending &&
          <>
            <div>Loading Cutomers</div>
            <img src={IMAGES.SPINNER} alt="loading"></img>
          </>
        }
        {getCustomersData &&
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
