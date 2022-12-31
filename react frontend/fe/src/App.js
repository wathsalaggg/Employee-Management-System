import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <><><div className="container">

      <ListEmployeeComponent />

    </div><div>
        <HeaderComponent />
      </div></><div>
        <FooterComponent />
      </div></>
  );
}

export default App;
