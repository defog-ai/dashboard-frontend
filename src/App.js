import logo from './logo.svg';
import LineChart from './Components/Charts/LineChart'
import './App.css';

function App() {
  const title = "My Chart";
  const data = [1,2,3];
  return (
    <div className="App">
      <LineChart title={title} data={data}/>
    </div>
  );
}

export default App;
