import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
