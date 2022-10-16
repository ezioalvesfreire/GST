import './App.css';
import DataComponent from './components/DataComponent';
import TopComponent from './components/TopComponent.js';
import MenuComponent from './components/MenuComponent.js';
import FooterComponet from './components/FooterComponent';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <TopComponent />
      <BrowserRouter>
        <MenuComponent />
        <DataComponent />
      </BrowserRouter>
      <FooterComponet />
    </div>
  );
}

export default App;
