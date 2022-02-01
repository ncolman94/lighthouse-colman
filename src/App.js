import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ClassComponent } from "./components/class-component/ClassComponent";
import FunctionalComponent from "./components/funtion-component/FunctionalComponent";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
