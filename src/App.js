import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColorgen from './components/randomColorgen';

function App() {
  return (
    <div className="w-screen h-screen bg-red-100">
      <RandomColorgen />
    </div>
  );
}

export default App;
