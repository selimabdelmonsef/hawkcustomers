import styles from './formComponent.module.scss';
import { useState } from 'react';

const FormComponent = ({
    infos,
    onSubmit,
    _canEditId,
    _id,
    _first_name,
    _last_name,
    _username,
    _gender,
    _email,
    _phonenumber,
    _address,
    _creditcard
}) => {

    const [emptyFields, setEmptyFiels] = useState(false)
    const [id, setId] = useState(_id);
    const [first_name, setfirst_name] = useState(_first_name);
    const [last_name, setlast_name] = useState(_last_name);
    const [username, setusername] = useState(_username);
    const [gender, setgender] = useState(_gender);
    const [email, setEmail] = useState(_email);
    const [phone_number, setphone_number] = useState(_phonenumber);
    const [address, setaddress] = useState(_address);
    const [credit_card, setcredit_card] = useState(_creditcard);

    const getInfos = () => {
        if (!id || !first_name ||
            !last_name ||
            !username ||
            !gender ||
            !email ||
            !phone_number ||
            !address ||
            !credit_card) {
            setEmptyFiels(true)
        }
        else {
            infos({
                id,
                first_name,
                last_name,
                username,
                gender,
                email,
                phone_number,
                address: { "city": address },
                credit_card: { "cc_number": credit_card },
            });
            onSubmit(false);
        }
    }
    return (
        <div className={styles.formStyle}>
            <form>
                <div className={styles.customerInfo}> Customer Info </div>
                <div className={styles.inputStyles}>
                    {_canEditId && <input onChange={(e) => setId(e.target.value)} placeholder="id" />}
                    {!_canEditId && <input disabled={true} value={id} />}
                    <input onChange={(e) => setfirst_name(e.target.value)} placeholder={first_name || "first name"} />
                </div>
                <div className={styles.inputStyles}>
                    <input onChange={(e) => setlast_name(e.target.value)} placeholder={last_name || "last name"} />
                    <input onChange={(e) => setusername(e.target.value)} placeholder={username || "username"} />
                </div>
                <div className={styles.inputStyles}>
                    <input onChange={(e) => setgender(e.target.value)} placeholder={gender || "gender"} />
                    <input onChange={(e) => setEmail(e.target.value)} placeholder={email || "email"} />
                </div>
                <div className={styles.inputStyles}>
                    <input onChange={(e) => setphone_number(e.target.value)} placeholder={phone_number || "phone_number"} />
                    <input onChange={(e) => setaddress(e.target.value)} placeholder={address || "address"} />
                </div>
                <div className={styles.inputStyles}>
                    <input onChange={(e) => setcredit_card(e.target.value)} placeholder={credit_card || "Credit Card Number"} />
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