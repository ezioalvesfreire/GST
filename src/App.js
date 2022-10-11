import './App.css';
import DataComponent from './components/DataComponent';
import TopComponent from './components/TopComponent.js';
import MenuComponent from './components/MenuComponent.js';
import FooterComponet from './components/FooterComponent';


function App() {
  return (
    <div className="App">
      <TopComponent />
      <MenuComponent />
      <DataComponent />
      <FooterComponet />
    </div>
  );
}

export default App;
