import { ThemeProvider } from "next-themes";
import React from "react";

function Provider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div>{children}</div>
    </ThemeProvider>
  );
}

export default Provider;
