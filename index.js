import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import reportWebVitals from './reportWebVitals';
import Layout from "./Layout";
import IcecreamForm from './Grocery/IcecreamForm';
import IcecreamList from './Grocery/IcecreamList';
import ProfitLossPage from './Grocery/ProfitLoss';
// import ProfitLossDate from './Grocery/ProfitLossDate';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/ >}>
     <Route path='/Icecream' element={<IcecreamList />} />
     <Route path="/Icecream/add" element={<IcecreamForm/>}/>
     <Route path="/Icecream/profit-loss" element={<ProfitLossPage/>}/> 
     {/* <Route path="/Icecream/profit-loss/date" element={<ProfitLossDate/>}/>  */}

     </Route>
    </Routes>
  </BrowserRouter>
</>
);


