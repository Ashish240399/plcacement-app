import logo from './logo.svg';
import './App.css';
import Mainpage from './components/Mainpage';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
    <Searchbar/>
      <Mainpage/>
    </div>
  );
}

export default App;
