import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'


import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    
    <div>

      <Router> 
        <div className='container'> 

<switch> http://localhost:3000/employees

  <Route path = "/"  component = {ListEmployeeComponent}>  </Route>
  <Route path = "/employees"  component = {ListEmployeeComponent}>  </Route>


   <ListEmployeeComponent/> 
</switch>

      <HeaderComponent />

    </div><div className="container">

        <ListEmployeeComponent />

      </div>
      <div>
        <FooterComponent />
</div>

        </Router> 
      </div>
  );

}


export default App;
