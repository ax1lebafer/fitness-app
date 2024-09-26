import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ReduxProvider from "@/store/ReduxProvider";
import React from "react";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Fitness App",
  description: "Fitness App",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <ReduxProvider>
          <div className="max-w-[1160px] mx-auto">
            <Header />
            {children}
            {auth}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
