import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Create from "./components/create";
import Update from "./components/update";
import Read from "./components/read";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header"> React Crud Operations</h2>
        <div>
          <Route exact path="/" component={Create} />
          <Route excat path="/update" component={Update}/>
          <Route excat path="/read" component={Read}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
