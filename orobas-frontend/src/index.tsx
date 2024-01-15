import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/app";

import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
