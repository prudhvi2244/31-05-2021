import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu';
import Services from './components/Services';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import GetProduct from './components/GetProduct';
import AllProducts from './components/AllProducts';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <div className='container mt-2'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/addProduct' component={AddProduct}/>
          <Route path='/allProducts' component={AllProducts}/>
          <Route path='/deleteProduct' component={DeleteProduct}/>
          <Route path='/getProduct' component={GetProduct}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
