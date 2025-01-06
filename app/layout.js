import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Provider from "./provider";
import { dark } from "@clerk/themes";

export const metadata = {
  title: "LogoVerse AI | Logo Generator",
  description:
    "AI-powered logo generator for your brand. Create unique, professional logos in seconds.",
  icons: {
    icon: "/logo1.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" className="dark" suppressHydrationWarning>
        <body>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
