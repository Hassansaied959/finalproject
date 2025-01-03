import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { appWithTranslation } from "next-i18next";
import "../../public/font-awesome-4.7.0/css/font-awesome.min.css";

import Header from "@/app/components/Header";
import Footer from "./components/Footer";
import ReduxProvider from "./reduxProvider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;
