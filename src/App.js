import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App vh-100">
      <Navbar />
      <Home />
      <Dashboard />
    </div>
  );
}

export default App;
