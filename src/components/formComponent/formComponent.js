
import styles from './formComponent.module.scss';
import { useState } from 'react';

const FormComponent = ({
    infos,
    onSubmit,
}) => {

    const [emptyFields, setEmptyFiels] = useState(false)
    const [id, setId] = useState('');
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [username, setusername] = useState('');
    const [gender, setgender] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setphone_number] = useState('');
    const [address, setaddress] = useState('');
    const [credit_card, setcredit_card] = useState('');

    const getInfos = () => {
        if (
            id === '' ||
            first_name === '' ||
            last_name === '' ||
            username === '' ||
            gender === '' ||
            email === '' ||
            phone_number === '' ||
            address === '' ||
            credit_card === ''
        ) {
            setEmptyFiels(true);
        }
        else {
            onSubmit(false);
            infos({
                id,
                first_name: first_name,
                last_name: last_name,
                username: username,
                gender: gender,
                email: email,
                phone_number: phone_number,
                address: { "city": address },
                credit_card: { "cc_number": credit_card },
            });
        }

    }
    return (
        <div className={styles.formStyle}>
            <form>
                <div className={styles.customerInfo}> Customer Info </div>
                <div className={styles.inputStyles}>
                    <input onChange={(e) => setId(e.target.value)} placeholder="id" />
                    <input onChange={(e) => setfirst_name(e.target.value)} placeholder="first name" />
                </div>
                <div className={styles.inputStyles}>
                    <input onChange={(e) => setlast_name(e.target.value)} placeholder="last name" />
                    <input onChange={(e) => setusername(e.target.value)} placeholder="username" />
                </div>
                <div className={styles.inputStyles}>
                    <input onChange={(e) => setgender(e.target.value)} placeholder="gender" />
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                </div>
                <div className={styles.inputStyles}>
                    <input onChange={(e) => setphone_number(e.target.value)} placeholder="phone_number" />
                    <input onChange={(e) => setaddress(e.target.value)} placeholder="address" />
                </div>
                <div className={styles.inputStyles}>
                    <input onChange={(e) => setcredit_card(e.target.value)} placeholder="Credit Card Number" />
                </div>

            </form>
            <div className={styles.formBtn}>
                <button onClick={() => getInfos()}> Submit </button>
                <button onClick={() => onSubmit(false)}>Cancel</button>
            </div>
            {emptyFields === true ?
                <div className={styles.errorFields}>Please fill all the required inputs</div>
                :
                ""}
        </div>
    );
}
export default FormComponent;
