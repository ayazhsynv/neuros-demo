import React from "react";
import UiHeader from "./UiHeader";
import { Outlet } from "react-router-dom";
import UiFooter from "./UiFooter";

const UiLayout = () => {
  return (
    <>
      <UiHeader />
      <main>
        <Outlet />
      </main>
      <UiFooter />
    </>
  );
};

export default UiLayout;
