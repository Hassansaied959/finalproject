"use client";
import React from "react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./rtk/store"; // Adjust the path as needed
import PageDirection from "./PageDirection";

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PageDirection>{children}</PageDirection>
    </Provider>
  );
}
