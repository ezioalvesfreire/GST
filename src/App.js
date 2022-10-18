import './App.css';
import DataComponent from './components/DataComponent';
import TopComponent from './components/TopComponent.js';
import MenuComponent from './components/MenuComponent.js';
import FooterComponet from './components/FooterComponent';

import SearchEqual from "./pages/SearchEqual";


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <TopComponent />
      <BrowserRouter>
        <MenuComponent />
        {/* <DataComponent /> */}
        <Routes>
          <Route path="/DataComponent" element={<DataComponent />} />
          <Route path="/SearchEqual" element={<SearchEqual />} />
         {/* <Route path="/SearchEquiv" element={<SearchEquiv />} />*/}
        </Routes>
      </BrowserRouter>
      <FooterComponet />
    </div>
  );
}

export default App;
