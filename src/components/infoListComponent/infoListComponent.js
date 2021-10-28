
import styles from './infoListComponent.module.scss';
import { useSelector } from 'react-redux';

const InfoListComponent = ({
    tabelTitles,
    customerInfos,
    customerData,
    dataInput,
    selectedCustomer
}) => {
    const getSelectedCustomer = useSelector(state => state.customer.selected);

    return (
        <div className={styles.infoListComponent}>
            <table>
                <tr className={styles.tableTitles}>
                    {tabelTitles?.map((element) => {
                        return <th>{element}</th>
                    })}
                </tr>
                {customerInfos?.map((infosElements, index) => {
                    return <tr key={infosElements?.username}
                        className={`${styles.customerInfo} ${getSelectedCustomer === infosElements ? styles.customerInfoSelected : ''}`}
                        onClick={() => selectedCustomer(infosElements)}>
                        <td>{index + 1}</td>
                        <td>{infosElements?.first_name}</td>
                        <td>{infosElements?.last_name}</td>
                        <td>{infosElements?.username}</td>
                        <td>{infosElements?.gender}</td>
                        <td>{infosElements?.email}</td>
                        <td>{infosElements?.phone_number}</td>
                        <td>{infosElements?.address?.city}</td>
                        <td>{infosElements?.credit_card?.cc_number}</td>
                    </tr>
                })}

            </table>
        </div>
    );
}
export default InfoListComponent;
