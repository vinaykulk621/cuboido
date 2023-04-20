import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Cuboido",
  description: "Definately Not Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden bg-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
