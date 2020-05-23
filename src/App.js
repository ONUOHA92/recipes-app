import React from 'react';
import './App.css';

// this is for the router



//this is where the component goes
import Home from './pages/Home'
import Recipies from './pages/Recipies'
import SingleRecipies from './pages/SingleRecipies'
import Dafault from './pages/Default'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
       <main>
         {/* navbar */}
            <Navbar />
         <Switch>
             <Route path='/' exact component={Home} />
             <Route path='/recipes' exact component={Recipies} />
             <Route path='/recipes/:id' component={SingleRecipies} />
             <Route   component={Dafault} />
             
          
         </Switch>
       </main>
          
    </Router>

  );
}

export default App;
