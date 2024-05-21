import Header from "./components/Header";
import Footer from "./components/Footer";
import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Entertainment Calendar",
  description: "A calendar for your games, movies or favorite hobbies",
};

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {" "}
        <header>
          <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
