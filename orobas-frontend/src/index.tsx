import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/app";

import "./style.css";

import { RouterProvider } from "@tanstack/react-router";

import { router } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<RouterProvider router={router} />);
