import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./boostrap/css/bootstrap.css";
import "./boostrap/js/bootstrap.js";
import "./styles/defaults.css";

createRoot(document.getElementById("root")).render(<App />);
