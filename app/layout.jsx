import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Vantage — Offensive & Defensive Security Reference";
const description =
  "A hands-on reference library of OSINT, malware analysis, digital forensics and social engineering tools, documented from real lab work.";

export const metadata = {
  title,
  description,
  authors: [{ name: "Abiola Emmanuel" }],
  icons: {
    icon: "/favicon.png",
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
