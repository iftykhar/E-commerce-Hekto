import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import firebaseConfig from "./firebase.config.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextApi } from "./Components/Others/ContextApi.jsx";
import store from "./app/store";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ContextApi>
        <App/>
      </ContextApi>
          
    </Provider>
  </StrictMode>
);
