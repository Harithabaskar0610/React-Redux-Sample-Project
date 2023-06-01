import "./App.css";
import Profile from "./components/profile";
import Login from "./components/login";
import ChangeColor from "./components/ChangeColor";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;