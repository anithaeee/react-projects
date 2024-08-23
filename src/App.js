import logo from './logo.svg';
import './App.css';
import Components from './components/Components';
import Form from './components/Form.js';
import Listitems from './components/Listitems';
import Login from './components/Form';
function App() {
  return (
    <div className="App">
      <Components />
      <Form />
      <Listitems />
      <Login />
    </div>
  );
}

export default App;
