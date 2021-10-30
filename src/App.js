

import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';
import './index.css';
import MyClass from './pages/classes/MyClass';

function App() {
  return (
    <>
      <Router>
        <div>
          <Header/>
          {/* <Route exact path="/" component={Home}/> */}
          <Route exact path="/" component={MyClass} />
          <Footer />
        </div>
      </Router>
    </>
  );
}

// const PageRoute = ({match}) => (
//   <div>
//       <Header activeItem={match.params.id != null ? match.params.id : "home"}/>
//   </div>
// )


export default App;
