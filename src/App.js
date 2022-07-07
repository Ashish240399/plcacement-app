import logo from './logo.svg';
import './App.css';
import Mainpage from './components/Mainpage';
import Searchbar from './components/Searchbar';
import DetailPage from './components/DetailedPage';

function App() {
  return (
    <div className="App">
    <Searchbar/>
      <Mainpage/>
      <DetailPage/>
    </div>
  );
}

export default App;
