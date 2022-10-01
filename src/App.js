import logo from './logo.svg';
import './App.css';
import MoodTracker from './components/MoodTracker.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MoodTracker />
      </header>
    </div>
  );
}

export default App;
