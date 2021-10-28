import './App.scss';
import InfoListComponent from './components/infoListComponent/infoListComponent';
import {cooo} from './conss.js'

function App() {
  return (
    <div className="app">
      <p>My Customers</p>
      <InfoListComponent 
      tabelTitles={["Customers","Salaries","ay haga","ay haga 2","ay haga 3"]}
      customerInfos={cooo}/>
    </div>
  );
}

export default App;
