import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Assignment -07 | KeenKeeper",
  description: "KeenKeeper — Keep Your Friendships Alive",
};

export default function RootLayout({ children }) {
  return (
    <html

      lang="en" data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 ">
        <Navbar/>
        <main className="max-w-[1110px] mx-auto w-[90%] ">
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
