import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./global.css";
import AuthProvider from "./auth/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
   defaultOptions:{
    queries:{
      refetchOnWindowFocus: false
    }
   }
})
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
