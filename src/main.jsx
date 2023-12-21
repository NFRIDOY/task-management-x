import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from "./routers/router.jsx";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from "./providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
