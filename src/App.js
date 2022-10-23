import './App.css';
import DataFets from './pages/DataFets';
import TopComponent from './components/TopComponent.js';
import MenuComponent from './components/MenuComponent.js';
import FooterComponet from './components/FooterComponent';

import DataPwrTransistor from "./pages/DataPwrTransistor";


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <TopComponent />
      <BrowserRouter>
        <MenuComponent />
        {/* <DataComponent /> */}
        <Routes>
          <Route path="/DataFets" element={<DataFets />} />
          <Route path="/DataPwrTransistor" element={<DataPwrTransistor/>} />
         {/* <Route path="/SearchEquiv" element={<SearchEquiv />} />*/}
        </Routes>
      </BrowserRouter>
      <FooterComponet />
    </div>
  );
}

export default App;
