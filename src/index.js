import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import App from "./App";
import "./App.css";
import cocktailDataReducer from "./features/cocktailData";
import searchReducer from "./features/searchData";

const store = configureStore({
    reducer: {
        searchData: searchReducer,
        cocktailData: cocktailDataReducer
    }
})

const queryClient = new QueryClient();

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App />
        </Provider>
    </QueryClientProvider>
);
