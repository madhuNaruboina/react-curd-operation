
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import ListComponent from './Components/ListComponent'
import ListEmployee from './Components/ListEmployee'
import CreateEmployee from './Components/CreateEmployee'
import ViewEmployee from './Components/ViewEmployee'


function App() {
  return (
    <div >
      <Router>
        <div className = "container">
          <Switch>
            <Route path = "/" exact component = {ListEmployee}></Route>
            <Route path = "/employees" component = {ListEmployee}></Route>
            <Route path = "/add-employee/:id" component = {CreateEmployee}></Route>
            <Route path = "/view-employee/:id" component = {ViewEmployee}></Route>
          </Switch>

        </div>
      </Router>
      
    </div>
  );
}

export default App;
