import "./App.css";
import { Provider } from "react-redux";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import store from "./Store/store";
import "./styles/styles.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
