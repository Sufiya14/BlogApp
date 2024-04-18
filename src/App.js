import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Components/Create';
import Details from './Components/Details';
import NotFound from './Components/NotFound';
import Update from './Components/Update';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  
  return (
    <GlobalProvider>
      <Router>
        <>
          <Navbar title="BlogApp" add="AddBlog" home='Home' />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/create"><Create /></Route>
            <Route path="/blogs/:id"><Details /></Route>
            <Route path="/edit/:id"><Update /></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </>
      </Router>
    </GlobalProvider>
  );
}

export default App;
