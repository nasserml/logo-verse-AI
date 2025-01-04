import { ThemeProvider } from "next-themes";
import React from "react";
import { Header } from "./_components/header";

function Provider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Header />
      <div>{children}</div>
    </ThemeProvider>
  );
}

export default Provider;
