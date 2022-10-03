import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ip from "ip";
import localIp from "local-ip-url";
var ipAdds = localIp();
var ipAdd = ip.address();
function App() {
  console.log(ip.address());
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="add" element={<AddProduct/>}/>
        <Route path="edit/:id" element={<EditProduct/>}/>
      </Routes>
      <div className="App">
        <h2>Your Ip Address is {ipAdd}, {ipAdds}</h2>
        
    </div>
    </BrowserRouter>    
  );
}
 
export default App;
// import React from 'react'
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
