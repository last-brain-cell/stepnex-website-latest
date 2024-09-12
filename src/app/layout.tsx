import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";



export const metadata: Metadata = {
  title: "StepNex Technologies",
  description: "Portfolio Website for StepNex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
