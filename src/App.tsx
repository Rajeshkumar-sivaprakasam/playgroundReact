import RouterComponent from "@shared/router/router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@shared/redux/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <RouterComponent />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
