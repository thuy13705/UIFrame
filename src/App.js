

import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css';
import './index.css';
import MyClass from './pages/classes/MyClass';
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          {/* <Route path="/:id?" component={PageRoute}/> */}
          <Route exact path="/" component={Home}/>
          <Route path="/course" component={MyClass} />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
