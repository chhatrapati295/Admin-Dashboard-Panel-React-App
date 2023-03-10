import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css'
import Home from "./pages/home/Home";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import UserList from "./pages/userList/UserList";
import EditUser from "./pages/editUser/EditUser";
import CreateUser from "./pages/createUser/CreateUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/users" element={<UserList/>}/>
          <Route exact path="/users/:userID" element={<EditUser/>}/>
          <Route exact path="/newUser" element={<CreateUser/>}/>
          <Route exact path="/products" element={<ProductList/>}/>
          <Route exact path="/products/:productID" element={<Product/>} />
          <Route exact path="/newProduct" element={<NewProduct/>} />
          <Route exact path="/products/:productID" element={<Product/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/products/:productID" element={<Product/>} />

        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
