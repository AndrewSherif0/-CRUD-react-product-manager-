
import './App.css';

import Navbar from './components/Navbar.js';
import SideBar from './components/SideBar.js';
import Home from './components/Home.js';
import Product from './components/Product.js';
import { Route,Routes} from 'react-router-dom';
import AddProject from './components/AddProduct.js';
import ProductDetails from './components/ProductDetails.js';
import ProductEdit from './components/ProductEdit.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='row'>
        <div className='col-2 sidebar'>
          <SideBar/>
        </div>
        <div className=' col-10'>
         <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/product" element ={<Product/>}/>
          <Route path="/product/Add" element ={<AddProject/>}/>
          <Route path="/product/:ProductID" element ={<ProductDetails/>}/>
          <Route path="/product/edit/:ProductID" element ={<ProductEdit/>}/>
         </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
