
import styles from './infoListComponent.module.scss';

const InfoListComponent = ({
    tabelTitles,
    // customerInfos,
    customerInfos,
    customerData,
    dataInput,
    selectedCustomer
}) => {

    return (
        <div className={styles.infoListComponent}>
            <table>
                <tr className={styles.tableTitles}>
                    {tabelTitles?.map((element)=>{
                        return <th>{element}</th>
                    })}
                </tr>
               
                {customerInfos?.map((infosElements)=>{
                    return  <tr>
                         <td>
                            {infosElements?.username}
                        </td>
                        <td>
                            {infosElements?.gender}
                        </td>
                        </tr>
                })}
                
                {/* <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr> */}
            </table>
        </div>
        // <div className={styles.infoListComponent}>
        //     <div className={styles.header}>
        //         <div>
        //             <div className={styles.title}>Customers</div>
        //             <div className={styles.listElementContainer}>
        //         {customerData?.map((element) => {
        //             return (
        //                 <div key={element}
        //                     onClick={() => selectedCustomer(element)}
        //                     className={styles.listElement}>
        //                     {element}
        //                 </div>
        //             );
        //         })
        //         }
        //     </div>
        //         </div>
        //         {infoTitles.map((infoTitleElements)=>{
        //             return <div className={styles.title}>
        //                 {infoTitleElements}
        //                 {customerInfos?.map((element)=>{
        //                     return <div>{element}</div>
        //                 })}
        //                 </div>
        //         })}


        //     </div>

        // </div>
    );
}
export default InfoListComponent;
