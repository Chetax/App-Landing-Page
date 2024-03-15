
import './App.css';
import Home from './Components/Home/Home';
import Features  from './Components/Featues/Featuers';
import Navbar from './Components/Navbar/Navbar';
import Work from './Components/Work/Work';
import Donwload  from './Components/DownloadApp';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home/>
      <Features></Features>
      <Work></Work>
      <Donwload></Donwload>
   
    </div>
  );
}

export default App;
