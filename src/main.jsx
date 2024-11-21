import { createRoot } from "react-dom/client";
import AppRoutes from "../AppRoutes.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./styles/defaults.css";
import "./styles/ad-page.css";

createRoot(document.getElementById("root")).render(<AppRoutes />);
