import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
