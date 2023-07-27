import "@styles/globals.css";
import Provider from "@components/Provider";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prompter App",
  description: "An example app that lets you Discover & share AI prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>
        <div className="xl:mx-20">

        {children}</div></Provider>
      </body>
    </html>
  );
}
